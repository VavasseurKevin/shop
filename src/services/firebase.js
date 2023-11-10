import firebaseConfig from "./config";
import app from "firebase/app";
import "firebase/auth";

class Firebase {

    constructor() {
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

}

// AUTH ACTIONS -------------

signInWithGoogle = () =>
    this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());