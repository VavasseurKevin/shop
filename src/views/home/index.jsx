import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

const Home = () => {

    return (
        <main>
            <div>
                <div>
                    <div>
                        <h1>
                            <strong>Voir</strong>
                            &nbsp;tout avec&nbsp;
                            <strong>Clarté</strong>
                        </h1>
                        <p>
                        L'achat de lunettes devrait vous rendre heureux et beau, avec de l'argent en poche.
                        Lunettes, lunettes de soleil et lentilles de contact : nous couvrons vos yeux.
                        </p>
                        <br/>
                        <Link to={ROUTES.SHOP} >
                        Acheter maintenant &nbsp;
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Home;