import React from "react";
import { Field, Form, Formik } from "formik";
import { ArrowRightOutlined } from "@ant-design/icons";
import { SocialLogin } from "../../../components/common";

const SignUp = () => {
  return (
    <main className="content">
    <div className="auth-content">
      <div className="auth">
        <div className="auth-main">
          <h3>S&apos;inscrire à Ma Vision</h3>
          <Formik
            initialValues={{ nomprenom: "", email: "", password: "" }}
            onSubmit={(values) => {
              // Gérez ici la soumission du formulaire
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <div className="auth-field">
                  <div className="input-group">
                    <label className="label-input" htmlFor="nomprenom">
                      * Nom & Prénom
                    </label>
                    <br />
                    <Field
                      name="nomprenom"
                      type="text"
                      placeholder="Kévin Vavasseur"
                      style={{ textTransform: "capitalize" }}
                      className="input-form input-error"
                    />
                  </div>
                </div>
                <div className="auth-field">
                  <div className="input-group">
                    <label className="label-input" htmlFor="email">
                      * Email
                    </label>

                    <br />
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
                    <br />
                    <Field
                      name="password"
                      type="password"
                      placeholder="Mot de passe"
                      className="input-form input-error"
                    />
                  </div>
                </div>
                <br />
                <div className="auth-field auth-action auth-action-signup">
                  <button className="button auth-button" type="submit">
                    Je m&apos;inscrire <ArrowRightOutlined />
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
          <strong>Vous avez déjà un compte ?</strong>
        </span>
        <button
          className="button button-small button-border button-border-gray"
          type="button"
        >
          Se connecter
        </button>
      </div>
    </div>
    </main>
  );
};

export default SignUp;
