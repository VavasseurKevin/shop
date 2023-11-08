import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import React from "react";

const SocialLogin = () => {
    return (
        <div className="auth-provider">
            <button
                className="button auth-provider-button provider-facebook"
                type="button"
            >
                <FacebookOutlined/>
                Continue avec Facebook
            </button>
            <button
                className="utton auth-provider-button provider-google"
                type="button"
            >
                <GoogleOutlined/>
                Continue avec Google
            </button>
            <button
                className="button auth-provider-button provider-github"
                type="button"
            >
                <GithubOutlined/>
                Continue avec Github
            </button>
            
        </div>
    );
};

export default SocialLogin;