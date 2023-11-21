// Importez votre instance Firebase
import firebaseInstance from "./firebase.js";

// Ajoutez un utilisateur avec e-mail et mot de passe
const emailToAdd = 'test80@example.com';
const passwordToAdd = 'securepassword60';

// Utilisez la méthode createUserWithEmailAndPassword de la classe Firebase
firebaseInstance.createUserWithEmailAndPassword(emailToAdd, passwordToAdd)
  .then((userCredential) => {
    console.log('Test successful: User added successfully.', userCredential.user);

    // Une fois que l'utilisateur est ajouté avec succès, appelez la fonction de test pour les produits en vedette
    testGetFeaturedProducts();
  })
  .catch((error) => {
    console.error('Test failed:', error.message);
  });

const testGetFeaturedProducts = async () => {
  try {
    const featuredProducts = await firebaseInstance.getFeaturedProducts();
    console.log('Featured Products:', featuredProducts);
  } catch (error) {
    console.error('Error testing getFeaturedProducts:', error.message);
  }
};
