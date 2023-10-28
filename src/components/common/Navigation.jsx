import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {

    return (
        <nav className="navigation">
            <div className="logo">
                <h2>SHOP ECOMMERCE</h2>
            </div>
            <ul className="navigation-menu">
                <li className="navigation-menu-item">
                    <NavLink
                        className="navigation-menu-link"
                        exact 
                        to="/"
                    >
                        Boutique</NavLink>
                </li>
                <li className="navigation-menu-item">
                    <NavLink
                   className="navigation-menu-link"
                   exact 
                   to="profile"
                   >
                        Mon compte</NavLink>
                </li>
                <li className="navigation-menu-item">
                    <NavLink>Panier</NavLink>
                </li>
            </ul>
        
        </nav>
    )
}

export default Navigation;