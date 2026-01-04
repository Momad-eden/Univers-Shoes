import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center fw-bold mb-5"
      >
        👟 Nos Chaussures
      </motion.h2>

      {products.length === 0 ? (
        <p className="text-center text-muted">
          Aucun produit disponible pour le moment
        </p>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card h-100 shadow-sm"
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>

                  <p className="fw-bold text-primary mb-3">
                    {product.price.toLocaleString()} FCFA
                  </p>

                  <button
                    className="btn btn-dark mt-auto"
                    onClick={() => addToCart(product)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
