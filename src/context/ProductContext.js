import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sneakers Urbaines Homme',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f',
      category: 'homme'
    },
    {
      id: 2,
      name: 'Baskets Élégantes Femme',
      price: 30000,
      image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f',
      category: 'femme'
    },
    {
      id: 3,
      name: 'Chaussures Sport Enfant',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68',
      category: 'enfant'
    }
  ]);

  // ➕ Ajouter produit (admin)
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  // ✏️ Modifier produit
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
  };

  // 🗑️ Supprimer produit
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
