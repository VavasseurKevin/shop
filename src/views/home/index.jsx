import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import bannerImg from "../../images/banner-girl.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ProductShowcaseGrid } from "../../components/product";
import { Footer } from "../../components/common";
import useFeaturedProducts from "../../hooks/useFeaturedProducts";

const Home = () => {
  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  console.log('Featured Products in Home:', featuredProducts);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Voir</strong> tout avec <strong>Clarté</strong>
            </h1>
            <p>
              L'achat de lunettes devrait vous rendre heureux et beau, avec de
              l'argent en poche. Lunettes, lunettes de soleil et lentilles de
              contact : nous couvrons vos yeux.
            </p>
            <br />
            <Link className="button" to={ROUTES.SHOP}>
              Acheter maintenant &nbsp;
              <ArrowRightOutlined />
            </Link>
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
          {isLoadingFeatured ? (
            <p>Chargement des produits populaires...</p>
          ) : (
            <ProductShowcaseGrid products={featuredProducts} skeletonCount={6} />
          )}
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Produits Recommandés</h1>
            <Link to={ROUTES.RECOMMENDED_PRODUCTS}>Voir Tout</Link>
          </div>
          {isLoadingFeatured ? (
            <p>Chargement des produits recommandés...</p>
          ) : (
            <ProductShowcaseGrid products={featuredProducts} skeletonCount={6} />
          )}
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
