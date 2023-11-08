import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo-full.png";
import { ShoppingOutlined } from "@ant-design/icons";
import * as ROUTES from "../../constants/routes";
import SearchBar from "./SearchBar";
import Badge from "./Badge";


const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          {" "}
          {/* Ajout de la prop 'to' */}
          <img alt="logo" src={logo} />
        </Link>
      </div>
      <ul className="navigation-menu-main">
        <li>
          <NavLink
            className="navigation-menu-active"
            exact
            to={ROUTES.HOME}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation-menu-active"
            exact
            to={ROUTES.SHOP}
          >
            Boutique
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation-menu-active"
            exact
            to={ROUTES.FEATURED_PRODUCTS}
          >
            En Vedette
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation-menu-active"
            exact
            to={ROUTES.RECOMMENDED_PRODUCTS}
          >
            Recommandée
          </NavLink>
        </li>
      </ul>
      <SearchBar />
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <button className="button-link navigation-menu-link" type="button">
            <Badge>
              <ShoppingOutlined style={{ fontSize: "2.4rem" }} />
            </Badge>
          </button>
        </li>
        <li className="navigation-action">
          <Link className="button button-small" exact to={ROUTES.SIGNUP}>
            S&apos;inscrire
          </Link>
        </li>

        <Link className="button button-small button-muted margin-left-s" exact to={ROUTES.SIGNIN}>
          Se connecter
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
