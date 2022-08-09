import {Link} from "react-router-dom";
import {StrongText} from "@sb1/ffe-core-react";
import logo from "../logo.svg";

function Navigation() {
    return (
        <div className="Navbar">
            <img src={logo} alt="Sparebank 1" className="logo"/>
            <div className="ffe-header__border">
                <div className="ffe-header__wrapper">
                    <nav className="ffe-header__site-nav" role="navigation">
                        <ul className="ffe-header__list ffe-header__site-nav-list">
                            <li className="ffe-header__list-item">
                                <a className="ffe-header__link ffe-small-text" href="/">
                                    Velkommen
                                </a>
                            </li>
                            <li className="ffe-header__list-item">
                                <a className="ffe-header__link  ffe-small-text" href="/din-bank">
                                    Din bank
                                </a>
                            </li>
                            <li className="ffe-header__list-item">
                                <a className="ffe-header__link ffe-small-text" href="/eksempel">
                                    Eksempler
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navigation;