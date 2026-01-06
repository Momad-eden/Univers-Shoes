import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const categoryColor = (cat) => {
    if (cat === "homme") return "primary";
    if (cat === "femme") return "danger";
    if (cat === "enfant") return "success";
    return "secondary";
  };

  return (
    <div className="page-content">
      <div className="container my-5">
        {/* TITRE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center fw-bold mb-4"
        >
          👟 Boutique Univers Shoes
        </motion.h2>

        {/* FILTRES */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {["all", "homme", "femme", "enfant"].map((cat) => (
            <button
              key={cat}
              className={`btn ${
                filter === cat ? "btn-dark" : "btn-outline-dark"
              } rounded-pill px-4`}
              onClick={() => setFilter(cat)}
            >
              {cat === "all"
                ? "Tous"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* PRODUITS */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="card h-100 border-0 shadow-sm position-relative product-card"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                {/* BADGE CATÉGORIE */}
                <span
                  className={`badge bg-${categoryColor(
                    product.category
                  )} position-absolute top-0 start-0 m-3 px-3 py-2`}
                  style={{ borderRadius: "20px" }}
                >
                  {product.category.toUpperCase()}
                </span>

                {/* IMAGE + OVERLAY */}
                <Link
                  to={`/product/${product.id}`}
                  className="position-relative"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  {/* OVERLAY */}
                  <div className="product-overlay d-flex align-items-center justify-content-center">
                    <span className="btn btn-light rounded-pill px-4">
                      👁 Voir le produit
                    </span>
                  </div>
                </Link>

                {/* CONTENU */}
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold">{product.name}</h6>

                  <p className="fw-bold mb-3" style={{ color: "#6366f1" }}>
                    {product.price.toLocaleString()} FCFA
                  </p>

                  <button
                    className="btn btn-dark rounded-pill mt-auto"
                    onClick={() => addToCart(product)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
