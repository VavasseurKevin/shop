import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import React from "react";

const ForgotPassword = () => {
  return (
    <main className="content">
    <div className="forgot_password">
      <h2>Mot de passe oublié ?</h2>
      <p>
        Entrez votre adresse e-mail et nous vous enverrons un e-mail de
        réinitialisation de mot de passe.
      </p>
      <br />
      <input
        className="input-form"
        label="* Email"
        maxLength={40}
        placeholder="Entrez votre email"
        type="email"
        style={{ width: "100%" }}
      />
      <br />
      <br />
      <button className="button w-100-mobile" type="button">
      <LoadingOutlined />
        &nbsp; Envoyer un email de réinitialisation du mot de passe
      </button>
    </div>
    </main>
  );
};

export default ForgotPassword;
