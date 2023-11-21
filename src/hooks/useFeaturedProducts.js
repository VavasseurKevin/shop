import { useDidMount } from '../hooks';
import firebase from '../services/firebase';
import { useEffect, useState } from 'react';

const useFeaturedProducts = (itemsCount) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const didMount = useDidMount(true);

    useEffect(() => {
        console.log('Fetching featured products...');
        fetchFeaturedProducts();
      }, []);
    
      useEffect(() => {
        console.log('Featured Products:', featuredProducts);
      }, [featuredProducts]);
    

      const fetchFeaturedProducts = async () => {
        try {
          setLoading(true);
          setError('');
      
          const docs = await firebase.getFeaturedProducts(itemsCount);
          console.log('Docs:', docs);
      
          if (docs.empty) {
            if (didMount) {
              setError('No featured products found.');
            }
          } else {
            const items = [];
      
            docs.forEach((snap) => {
              if (typeof snap.data === 'function') {
                // Utilisez la méthode data si elle est disponible
                const data = snap.data();
                if (!data) {
                  console.error('Data is undefined for snapshot:', snap);
                  return;
                }
      
                const { id } = snap.ref;
                const product = { id, ...data };
      
                console.log('Product:', product);
                items.push(product);
              } else {
                // Utilisez directement les propriétés de snap si data n'est pas une fonction
                const { id, ...rest } = snap;
                const product = { id, ...rest };
      
                console.log('Product:', product);
                items.push(product);
              }
            });
      
            console.log('Items:', items);
      
            if (didMount) {
              setFeaturedProducts(items);
            }
          }
        } catch (error) {
          console.error('Error fetching featured products:', error.message);
          if (didMount) {
            setError(`Error fetching featured products: ${error.message}`);
          }
        } finally {
          if (didMount) {
            setLoading(false);
          }
        }
      };
      
      
      
      

      useEffect(() => {
        console.log('Fetching featured products...');
        fetchFeaturedProducts();
      }, [didMount]);
      
      useEffect(() => {
        console.log('Featured Products:', featuredProducts);
      }, [featuredProducts]);
      
      useEffect(() => {
        console.log('New value of featuredProducts:', featuredProducts);
      }, [featuredProducts]);
      
  return {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading,
    error,
  };
};

export default useFeaturedProducts;