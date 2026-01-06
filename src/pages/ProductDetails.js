import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [added, setAdded] = useState(false);

  // ✅ Initialiser l’image active quand le produit est disponible
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container my-5 text-center">Produit introuvable</div>
    );
  }

  // Galerie (extensible plus tard)
  const gallery = [product.image];

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];

  const handleAddToCart = () => {
    if (!selectedSize || added) return;

    addToCart({ ...product, size: selectedSize });
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="page-content">
      <div className="container my-5">
        <div className="row g-5">
          {/* ================= GALERIE ================= */}
          <div className="col-12 col-md-6">
            <motion.img
              key={activeImage}
              src={activeImage}
              alt={product.name}
              className="img-fluid rounded-4 shadow-sm mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="us-gallery-thumbs">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  className={`us-thumb-btn ${
                    activeImage === img ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* ================= INFOS ================= */}
          <div className="col-12 col-md-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-2"
            >
              {product.name}
            </motion.h1>

            <p className="us-price-lg mb-3">
              {product.price.toLocaleString()} FCFA
            </p>

            <p className="text-muted mb-4">
              Chaussure conçue pour offrir confort, durabilité et élégance au
              quotidien.
            </p>

            {/* ================= POINTURES ================= */}
            <div className="mb-4">
              <p className="fw-semibold mb-2">Choisir la pointure</p>

              <div className="d-flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`us-size-btn ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ================= CTA ================= */}
            <motion.button
              className="us-btn-primary w-100 mb-3"
              disabled={!selectedSize || added}
              whileTap={{ scale: 0.96 }}
              onClick={handleAddToCart}
            >
              {added ? "✓ Ajouté au panier" : "Ajouter au panier"}
            </motion.button>

            {/* ================= FEEDBACK ================= */}
            <AnimatePresence>
              {added && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-success text-center"
                >
                  Le produit a été ajouté au panier
                </motion.p>
              )}
            </AnimatePresence>

            {/* ================= RASSURANCE ================= */}
            <div className="us-reassurance mt-4">
              <p>🚚 Livraison rapide</p>
              <p>💳 Paiement sécurisé</p>
              <p>↩️ Retour possible sous 48h</p>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="row mt-5">
          <div className="col-md-8">
            <h5>Description</h5>
            <p className="text-muted">
              Cette chaussure est fabriquée à partir de matériaux sélectionnés
              pour garantir une excellente durabilité, un confort optimal et un
              style intemporel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
