import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import bannerImg from "../../images/banner-girl.png";

const Home = () => {
  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Voir</strong>
              &nbsp;tout avec&nbsp;
              <strong>Clarté</strong>
            </h1>
            <p>
              L&apos;achat de lunettes devrait vous rendre heureux et beau, avec
              de l&apos;argent en poche. Lunettes, lunettes de soleil et
              lentilles de contact : nous couvrons vos yeux.
            </p>
            <br />
            <Link to={ROUTES.SHOP}>Acheter maintenant &nbsp;</Link>
          </div>

          <div className="banner-img">
            <img src={bannerImg} alt="Banner" />
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Produits Populaires</h1>
            <Link to={ROUTES.FEATURED_PRODUCTS}>Voir Tout</Link>
          </div>
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Produits Recommandés</h1>
            <Link to={ROUTES.RECOMMENDED_PRODUCTS}>Voir Tout</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
