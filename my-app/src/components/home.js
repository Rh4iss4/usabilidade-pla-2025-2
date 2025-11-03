import React from "react";
import  style from '../styles/home.css';

const home = ({title, links}) => {
    return (
        <main className="home-conatiner conteiner py-">;
        <h1 className={style.home__title}>{title}</h1>
        <ul className="home-list list-unstyled">
            {links.map((link, idx) =>
            <li key={idx} className="home-list-item">
                <a classNam="home-link" href={link.href}>{link.label}</a>
            </li>
        )}
        </ul>
        </main>
    )
}
export default home;