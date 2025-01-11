import { useState } from "react";
import { UseCookies } from "../../../shared/UseCookie";
import { Link } from "react-router";
import age from "../../../assets/header/age.png";
import logo from "../../../assets/header/ichigo.png";
import "../style/Header.scss";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { getCookieAge } = UseCookies();
  const isOlderAge = getCookieAge();

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="Logo" />
          <div
            className={`header__wrapper__items ${
              !isOlderAge ? "disabled" : ""
            }`}
          >
            <Link to={isOlderAge && "/"}>Main</Link>
            <Link to={isOlderAge && "/politic-rules"}>Politic Rules</Link>
          </div>
          <img className="header__age" src={age} alt="Age verification" />
        </div>
      </div>

      <div className="header__mobile__menu">
        <div
          className="burger__icon"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <div className={`burger__line ${isOpenMenu ? "open" : ""}`}></div>
          <div className={`burger__line ${isOpenMenu ? "open" : ""}`}></div>
          <div className={`burger__line ${isOpenMenu ? "open" : ""}`}></div>
        </div>
        {isOpenMenu && (
          <div className="burger__menu">
            <div className="burger__menu__items">
              <Link to={isOlderAge && "/"}>Main</Link>
              <Link to={isOlderAge && "/politic-rules"}>Politic Rules</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
