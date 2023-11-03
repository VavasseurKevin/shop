import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import lunette1 from "../../static/lunettes1.png";
import lunette2 from "../../static/lunettes2.png";
import lunette3 from "../../static/lunettes3.png";
import { ProductShowcaseGrid } from "../../components/product";

const ViewProduct = () => {
  return (
    <main className="content">
      <div className="product-view">
        <Link to={ROUTES.SHOP}>
          <h3 className="button-link d-inline-flex"> 
            <ArrowLeftOutlined />
            &nbsp; Retour à la boutique
          </h3>
        </Link>
        <div className="product-modal">
          <div className="product-modal-image-collection">
            <div className="product-modal-image-collection-wrapper">
              <img
                className="product-modal-image-collection-img"
                src={lunette1}
                alt="Image 1"
              />
            </div>
            <div className="product-modal-image-collection-wrapper">
              <img
                className="product-modal-image-collection-img"
                src={lunette2}
                alt="Image 2"
              />
            </div>
            <div className="product-modal-image-collection-wrapper">
              <img
                className="product-modal-image-collection-img"
                src={lunette3}
                alt="Image 3"
              />
            </div>
        </div>
            <div className="product-modal-image-wrapper">
            <img
                className="product-modal-image-collection-img"
                src={lunette3}
                alt="Image 3"
              />
            </div>

            <div className="product-modal-details">
              <br />
              <span className="text-subtle">Lunette de vue</span>
              <h1 className="margin-top-0">Guccu GG-0165</h1>
              <span>
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression.
              </span>
              <br />
              <br />
              <div className="divider" />
              <br />
              <div>
                <span className="text-subtle">Lens Width and Frame Size</span>
                <br />
                <br />
                <select>
                  <option value="" disabled selected>
                    --Select Size--
                  </option>
                  <option value="size1">28 mm</option>
                  <option value="size2">36 mm</option>
                  <option value="size2">42 mm</option>
                </select>
              </div>
              <br />
              <div>
                <span className="text-subtle">Choose Color</span>
                <br />
                <br />
              </div>
              <h1>260$</h1>

              <div className="product-modal-action">
                <button className="bbutton button-small utton-border button-border-gray">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "10rem" }}>
            <div className="display-header">
              <h1>Recommandée</h1>
              <Link to={ROUTES.RECOMMENDED_PRODUCTS}>Voir Tout</Link>
              </div>
              <ProductShowcaseGrid />
           
          </div>
        </div>
      
    </main>
  );
};

export default ViewProduct;
