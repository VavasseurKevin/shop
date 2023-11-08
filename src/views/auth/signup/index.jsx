import React from "react";
import { Field, Form, Formik } from "formik";
import { ArrowRightOutlined } from "@ant-design/icons";
import { SocialLogin } from "../../../components/common";

const SignUp = () => {
  return (
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
                  <label htmlFor="nomprenom">* Nom & Prénom</label>
                  <br/>
                  <Field
                    name="nomprenom"
                    type="text"
                    placeholder="Kévin Vavasseur"
                    style={{ textTransform: "capitalize" }}
                  />
                </div>
                <div className="auth-field">
                  <label htmlFor="email">* Email</label>
                  
                  <br/>
                  <Field
                    name="email"
                    type="email"
                    placeholder="test@exemple.com"
                  />
                </div>
                <div className="auth-field">
                  <label htmlFor="password">* Mot de passe</label>
                  <br/>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                  />
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
            <SocialLogin/>
      </div>
    </div>
  );
};

export default SignUp;
