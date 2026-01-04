import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
    toast.success("Produit ajouté au panier 🛒");
  };

  <motion.div
    whileHover={{ scale: 1.03 }}
    className="card h-100 shadow border-0 position-relative"
  >
    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
      Nouveau
    </span>

    <img src={product.image} className="card-img-top" alt={product.name} />

    <div className="card-body d-flex flex-column">
      <h5>{product.name}</h5>
      <p className="fw-bold">{product.price} FCFA</p>
      <button
        className="btn btn-dark mt-auto"
        onClick={() => addToCart(product)}
      >
        Ajouter au panier
      </button>
    </div>
  </motion.div>;
};

export default ProductCard;
