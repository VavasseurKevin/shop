import React from 'react';
import logo from "../../images/logo-full.png";

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footer-col-1'>
                <strong>
                    <span>
                        Développé par KEVIN VAVASSEUR
                    </span>
                </strong>
            </div>

            <div className="footer-col-2">
            <img alt="Footer logo" className="footer-logo" src={logo} />
            <h5>
            &copy;&nbsp;
            {new Date().getFullYear()}
            </h5>
            </div>
            <div className="footer-col-3">
        <strong>
          <span>Clonner ce projet &nbsp;
            <a href="https://github.com/VavasseurKevin/shop">ici</a>
          </span>
        </strong>
      </div>

        </footer>
    )
};

export default Footer;
