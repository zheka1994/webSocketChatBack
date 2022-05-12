using System;
using System.Net.Mime;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using websocketChat.Api.Internal;
using websocketChat.Api.Internal.Filters;
using websocketChat.Api.Internal.Validation;
using websocketChat.Api.Middlewares;
using websocketChat.Core.Models;
using websocketChat.Data;

namespace websocketChat.Api
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            string envName = environment.EnvironmentName;
            string fileName = string.IsNullOrEmpty(envName)
                ? "appsettings.json"
                : $"appsettings.{envName}.json";
            var builder = new ConfigurationBuilder()
                .AddJsonFile(fileName);
            _configuration = builder.Build();
        }
        
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            string dbConnectionString = _configuration
                .GetSection("AppSettings")
                ?.GetSection("ConnectionStrings")
                ?.GetSection("Db")
                ?.Value ?? "";
            services.AddOptions();
            services.Configure<JwtOptions>(options =>
            {
                var jwtOptionsSection = _configuration
                    .GetSection("AppSettings")
                    ?.GetSection("JwtOptions");
                options.SecretKey = jwtOptionsSection?.GetSection("SecretKey")?.Value;
                options.Audience = jwtOptionsSection?.GetSection("Audience")?.Value;
                options.Issuer = jwtOptionsSection?.GetSection("Issuer")?.Value;
                if (double.TryParse(jwtOptionsSection.GetSection("ExpirationTimeHours")?.Value, out double time))
                {
                    options.ExpirationTimeHours = TimeSpan.FromHours(time);
                }
            });
            services.Configure<OAuthOptions>(_configuration.GetSection("AppSettings:OAuthOptions"));
            services.Configure<VkAuthOptions>(_configuration.GetSection("AppSettings:OAuthOptions:VkAuthOptions"));
            services.Configure<GoogleAuthOptions>(_configuration.GetSection("AppSettings:OAuthOptions:GoogleAuthOptions"));
            services.AddDbContext<ChatDbContext>(options => options
                .UseNpgsql(dbConnectionString)
                // .UseSnakeCaseNamingConvention()
                .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()))
                .EnableSensitiveDataLogging());
            services.AddAuthenticationServices(_configuration);
            services.AddDatabaseDeveloperPageExceptionFilter();
            services.AddControllersWithViews(options =>
            {
                options.Filters.Add(new ExceptionFilter());
            }).ConfigureApiBehaviorOptions(options =>
            {
                options.InvalidModelStateResponseFactory = context =>
                {
                    var result = new ValidationFailedResult(context.ModelState);
                    result.ContentTypes.Add(MediaTypeNames.Application.Json); 
                    return result;
                };
            });
            services.AddAppServices();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMiddleware<FallbackMiddleware>();
            
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseWebSockets();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}");
            });
        }
    }
}