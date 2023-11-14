import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Import the Firebase configuration
import firebaseConfig from './config.js';

class Firebase {
  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Check that getAuth is used here
    this.auth = getAuth(app);
    this.storage = getStorage(app);
    this.db = getFirestore(app);
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
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
