import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sneakers Urbaines',
      price: 35000,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Sandales',
      price: 10000,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Airmax',
      price: 22000,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Mocasins',
      price: 15000,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Baskets Montantes',
      price: 55000,
      image: 'https://via.placeholder.com/150'
    },
  ]);

  // ➕ Ajouter
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  // ✏️ Modifier
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
  };

  // 🗑️ Supprimer
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
