
// Importez votre instance Firebase
import firebaseInstance from "./firebase.js";

// Ajoutez un utilisateur avec e-mail et mot de passe
const emailToAdd = 'test6@example.com';
const passwordToAdd = 'securepassword6';

// Utilisez la méthode createUserWithEmailAndPassword de la classe Firebase
firebaseInstance.createUserWithEmailAndPassword(emailToAdd, passwordToAdd)
  .then((userCredential) => {
    console.log('Test successful: User added successfully.', userCredential.user);
  })
  .catch((error) => {
    console.error('Test failed:', error.message);
  });
