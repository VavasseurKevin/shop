import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, get } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Import the Firebase configuration
import firebaseConfig from './config.js';

class Firebase {
  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    this.auth = getAuth(app);
    this.storage = getStorage(app);
    this.db = getFirestore(app);
    this.realtimeDb = getDatabase(app);  // Ajoutez la référence à la base de données en temps réel
  }

  async createUserWithEmailAndPassword(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User created successfully:', userCredential.user);
      return userCredential;
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw error;
    }
  }

  getFeaturedProducts = async (itemsCount = 12) => {
    try {
      // Construire une référence à la base de données en temps réel
      const productsRef = ref(this.realtimeDb, 'products');
  
      // Utiliser la fonction get pour obtenir une seule fois les données
      const snapshot = await get(productsRef);
  
      if (snapshot.exists()) {
        // Convertir les données du snapshot en tableau d'objets
        const data = snapshot.val();
        const products = Object.keys(data).map(key => ({ id: key, ...data[key] }));
  
        // Filtrer les produits recommandés
        const featuredProducts = products.filter(product => product.isFeatured);
  
        // Limiter les résultats
        const limitedProducts = featuredProducts.slice(0, itemsCount);
  
        console.log('Featured Products from Realtime Database:', limitedProducts);
        return limitedProducts;
      } else {
        console.log('No data found in Realtime Database');
        return [];
      }
    } catch (error) {
      console.error('Error fetching featured products:', error.message);
      throw error;
    }
  };

  getRecommendedProducts = async (itemsCount = 12) => {
    try {
      // Construire une référence à la base de données en temps réel
      const productsRef = ref(this.realtimeDb, 'products');
  
      // Utiliser la fonction get pour obtenir une seule fois les données
      const snapshot = await get(productsRef);
  
      if (snapshot.exists()) {
        // Convertir les données du snapshot en tableau d'objets
        const data = snapshot.val();
        const products = Object.keys(data).map(key => ({ id: key, ...data[key] }));
  
        // Filtrer les produits recommandés
        const featuredProducts = products.filter(product => product.isRecommended
                    );
  
        // Limiter les résultats
        const limitedProducts = featuredProducts.slice(0, itemsCount);
  
        console.log('Recommended Products from Realtime Database:', limitedProducts);
        return limitedProducts;
      } else {
        console.log('No data found in Realtime Database');
        return [];
      }
    } catch (error) {
      console.error('Error fetching recommended products:', error.message);
      throw error;
    }
  };
  
  
  
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
