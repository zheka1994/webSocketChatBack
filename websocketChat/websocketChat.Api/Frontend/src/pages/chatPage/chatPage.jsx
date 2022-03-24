import React from "react";

export default function ChatPage(props) {
    return (
        <div className="container">
            <aside className="friends">
                <div className="friends__header">
                    <span className="friends__title">Friends</span>
                    <span className="friends__count">82</span>
                </div>
                <ul className="friends__list">
                    <li className="friends__list-item friends__list-item_online">
                        <figure className="avatar">
                            <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            <figcaption className="avatar__caption">
                                Orlando Diggs
                            </figcaption>
                        </figure>
                    </li>
                    <li className="friends__list-item friends__list-item_online">
                        <figure className="avatar">
                            <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            <figcaption className="avatar__caption">
                                Orlando Diggs
                            </figcaption>
                        </figure>
                    </li>
                    <li className="friends__list-item friends__list-item_online">
                        <figure className="avatar">
                            <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            <figcaption className="avatar__caption">
                                Orlando Diggs
                            </figcaption>
                        </figure>
                    </li>
                    <li className="friends__list-item friends__list-item_offline">
                        <figure className="avatar">
                            <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            <figcaption className="avatar__caption">
                                Orlando Diggs
                            </figcaption>
                        </figure>
                    </li>
                    <li className="friends__list-item friends__list-item_offline">
                        <figure className="avatar">
                            <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            <figcaption className="avatar__caption">
                                Orlando Diggs
                            </figcaption>
                        </figure>
                    </li>
                    <li className="friends__list-item friends__list-item_online">
                        <figure className="avatar">
                            <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            <figcaption className="avatar__caption">
                                Orlando Diggs
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </aside>
            <main className="dialog">
                <section className="dialog__header">
                    <div className="dialog__caption">
                    <span className="dialog__title">
                        Orlando Diggs
                    </span>
                        <svg className="dialog__star">
                            <use xlinkHref="img/svg/icons-sprite.svg#star"></use>
                        </svg>
                    </div>
                    <div className="dialog__menu">
                        <div className="input">
                            <input className="input__control" type="text" placeholder="Search..."/>
                            <svg className="input__icon">
                                <use xlinkHref="img/svg/icons-sprite.svg#search"/>
                            </svg>
                        </div>
                    </div>
                </section>
                <div className="delimiter"/>
                <section className="dialog__main">
                    <div className="message-list">
                        <div className="message-list__item">
                            <figure className="avatar">
                                <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            </figure>
                            <div className="message-content">
                                <div className="message-content__header">
                                <span className="message-content__title">
                                    Nala Hester
                                </span>
                                    <span className="message-content__time">
                                    11:54 AM
                                </span>
                                </div>
                                <p className="message-content__text">
                                    Working from a van in Australia isn’t feasible if you need internet. It may have
                                    improved over the last years but I spent some time in a camper van around Tasmania
                                    and internet was a real problem (and Tasmania is tiny compared to the rest of the
                                    country).
                                </p>
                            </div>
                        </div>
                        <div className="message-list__date">
                            <span>Monday, October 22nd</span>
                        </div>
                        <div className="message-list__item">
                            <figure className="avatar">
                                <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            </figure>
                            <div className="message-content">
                                <div className="message-content__header">
                                <span className="message-content__title">
                                    Nala Hester
                                </span>
                                    <span className="message-content__time">
                                    11:54 AM
                                </span>
                                </div>
                                <p className="message-content__text">
                                    <a href="#" className="reference">@pierrhack</a> hello, I'm working on it!)
                                </p>
                            </div>
                        </div>
                        <div className="message-list__date">
                            <span>Today</span>
                        </div>
                        <div className="message-list__item">
                            <figure className="avatar">
                                <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            </figure>
                            <div className="message-content">
                                <div className="message-content__header">
                                <span className="message-content__title">
                                    Nala Hester
                                </span>
                                    <span className="message-content__time">
                                    12:54 PM
                                </span>
                                </div>
                                <p className="message-content__text">
                                    Good news, bro!!
                                </p>
                            </div>
                        </div>
                        <div className="message-list__item">
                            <figure className="avatar">
                                <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            </figure>
                            <div className="message-content">
                                <div className="message-content__header">
                                <span className="message-content__title">
                                    Nala Hester
                                </span>
                                    <span className="message-content__time">
                                    12:54 PM
                                </span>
                                </div>
                                <p className="message-content__text">
                                    Good news, bro!!
                                </p>
                                <figure className="message-content__picture">
                                    <img className="message-content__image" src="img/jpg/avatar.jpg" alt="image"/>
                                </figure>
                            </div>
                        </div>
                        <div className="message-list__item">
                            <figure className="avatar">
                                <img className="avatar__img" src="img/jpg/avatar.jpg" alt="avatar"/>
                            </figure>
                            <div className="message-content">
                                <div className="message-content__header">
                                <span className="message-content__title">
                                    Nala Hester
                                </span>
                                    <span className="message-content__time">
                                    11:54 AM
                                </span>
                                </div>
                                <p className="message-content__text">
                                    <a href="#" className="reference">@pierrhack</a> @aa_da What's the reason for the
                                    van? Saving money or just like to get outside? If you've got a stable source of
                                    income you could always do some short term Airbnbs + buy a truck/topper, build a
                                    platform in the back. That way you can always convert it back to a truck and sleep
                                    in an apartment if you want.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="delimiter"/>
                <section className="dialog__footer">
                    <svg className="clip">
                        <use xlinkHref="img/svg/icons-sprite.svg#clip"/>
                    </svg>
                    <svg className="microphone">
                        <use xlinkHref="img/svg/icons-sprite.svg#microphone"/>
                    </svg>
                    <textarea className="dialog__comment comment" placeholder="Enter message"/>
                </section>
            </main>
            <aside className="current-friend">
                <figure>
                    <img src="img/jpg/avatar.jpg" alt="friend" className="current-friend__avatar"/>
                    <figcaption>
                        <div className="current-friend__name">
                            Eugen Guziy
                        </div>
                        <div className="current-friend__desc">
                            Web Developer
                        </div>
                    </figcaption>
                </figure>
                <div className="current-friend__container">
                    <section className="social">
                    <span className="social__icon">
                        <svg className="facebook">
                            <use xlinkHref="img/svg/icons-sprite.svg#facebook"></use>
                        </svg>      
                    </span>
                        <span className="social__icon">
                        <svg className="twitter">
                            <use xlinkHref="img/svg/icons-sprite.svg#twitter"></use>
                        </svg>   
                    </span>
                        <span className="social__icon">
                        <svg className="instagramm">
                            <use xlinkHref="img/svg/icons-sprite.svg#instagramm"></use>
                        </svg>
                    </span>
                        <span className="social__icon">
                        <svg className="linked-in">
                            <use xlinkHref="img/svg/icons-sprite.svg#linked-in"></use>
                        </svg>   
                    </span>
                    </section>
                    <ul className="contacts">
                        <li className="contacts__item">
                            <div className="contacts__caption">
                                Username
                            </div>
                            <div className="contacts__value">
                                @eguziy
                            </div>
                        </li>
                        <li className="contacts__item">
                            <div className="contacts__caption">
                                Email
                            </div>
                            <div className="contacts__value">
                                qwerty123@prfdf.de
                            </div>
                        </li>
                        <li className="contacts__item">
                            <div className="contacts__caption">
                                Skype
                            </div>
                            <div className="contacts__value">
                                sdsdsdc454
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}