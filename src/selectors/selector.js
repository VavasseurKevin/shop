export const selectFilter = () => {

     // Vérifie si la liste de produits est vide ou non définie
    if (!products || products.length === 0) return [];

    // Convertit le mot-clé de filtre en minuscules
    const keyword = filter.keyword.toLowerCae();

    // Filtre les produits en fonction des critères spécifiés dans l'objet filter
    return products.filter((product) => {
    
    // Vérifie si le prix du produit est dans la plage spécifiée (si maxPrice est défini dans le filtre)
    const isInRange = filter.maxPrice
        ? (product.price >= filter.minPrice && product.price <= filter.maxPrice)
        : true;

    // Vérifie si le mot-clé est présent dans les mots-clés du produit
    const matchKeyword = product.keywords ? product.keywords.includes(keyword) : true;
    
    // Vérifie si la description du produit contient le mot-clé
    const matchDescription = product.description
    ? product.description.toLowerCase().includes(keyword)
    : true;

    // Vérifie si la marque du produit correspond à la marque spécifiée dans le filtre
    const matchBrand = product.brand ? product.brand.toLowerCase().includes(filter.brand) : true;

     // Retourne vrai si le produit satisfait tous les critères de filtrage
     return ((matchKeyword || matchDescription) && matchBrand && isInRange);
    }).sort((a, b) => {
        if (filter.sortBy === 'name-desc') {
          return a.name < b.name ? 1 : -1;
        } else if (filter.sortBy === 'name-asc') {
          return a.name > b.name ? 1 : -1;
        } else if (filter.sortBy === 'price-desc') {
          return a.price < b.price ? 1 : -1;
        }
    
        return a.price > b.price ? 1 : -1;
    });

     // Trie les produits en fonction de la propriété spécifiée dans le filtre (tri par nom ou par prix)
};

// Select produit avec le prix max
export const selectMax = (products) => {
    if (!products || products.length === 0) return 0;
  
    let high = products[0];
  
    for (let i = 0; i < products.length; i++) {
      if (products[i].price > high.price) {
        high = products[i];
      }
    }
  
    return Math.floor(high.price);
  };

  // Select produit avec le prix min
export const selectMin = (products) => {
    if (!products || products.length === 0) return 0;
    let low = products[0];
  
    for (let i = 0; i < products.length; i++) {
      if (products[i].price < low.price) {
        low = products[i];
      }
    }
  
    return Math.floor(low.price);
  };
  