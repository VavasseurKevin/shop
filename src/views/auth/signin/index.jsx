import React from "react";
import { SocialLogin } from "../../../components/common";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as ROUTES from '../../../constants/routes';

const SignIn = () => {
  return (
    <main className="content">
      <div className="auth-content">
        <div className="auth">
          <div className="auth-main">
            <h3>Connectez-vous à Ma Vision</h3>
            <Formik
              
            >
              {() => (
                <Form>
                  <div className="auth-field">
                    <div className="input-group">
                      <label className="label-input" htmlFor="email">
                        Email
                      </label>

                      <Field
                        name="email"
                        type="email"
                        placeholder="test@exemple.com"
                        className="input-form input-error"
                      />
                    </div>
                  </div>
                  <div className="auth-field">
                    <div className="input-group">
                      <label className="label-input" htmlFor="password">
                        * Mot de passe
                      </label>

                      <Field
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        className="input-form input-error"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="auth-field auth-action ">
                    <Link  
                        to={ROUTES.FORGOT_PASSWORD}
                        style={{ textDecoration: "underline" }}>
                      <span>Mot de passe oublié ?</span>
                    </Link>
                    <button className="button auth-button" type="submit">
                      Je me connecte <ArrowRightOutlined />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="auth-divider">
            <h6>OR</h6>
          </div>
          <SocialLogin />
        </div>
        <div className="auth-message">
          <span className="auth-info">
            <strong>Vous n&apos;avez pas de compte ?</strong>
          </span>
          <button
            className="button button-small button-border button-border-gray"
            type="button"
          >
            S&apos;inscrire
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
