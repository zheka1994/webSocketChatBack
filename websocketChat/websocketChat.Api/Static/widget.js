(function() {
    function loadJavaScript(src) {
        var body = document.querySelector("body");
        var js = document.createElement("script");
        js.src = src;
        js.async = true;
        body.append(js);
    }
    
    function loadCss(href) {
        var head = document.querySelector("head");
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "http://website.com/css/stylesheet.css";
    }

    loadCss("");
    loadJavaScript("");
})();