import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Home = () => {
  const { products } = useContext(ProductContext);

  // Produits vedettes (3 max)
  const featuredProducts = products.slice(0, 3);

  return (
    <div style={{ backgroundColor: '#f8fafc' }}>

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: '70vh',
          background:
            'linear-gradient(135deg, #0f172a, #020617)'
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">
            Univers Shoes
          </h1>

          <p className="lead mb-5 text-light">
            L’élégance commence par vos chaussures.<br />
            Style, confort et qualité premium.
          </p>

          <Link
            to="/shop"
            className="btn btn-lg px-5 py-3"
            style={{
              backgroundColor: '#6366f1',
              color: '#fff',
              borderRadius: '50px'
            }}
          >
            Découvrir la collection
          </Link>
        </div>
      </motion.section>

      {/* ================= PRODUITS VEDETTES ================= */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">
          ⭐ Produits vedettes
        </h2>

        <p className="text-center text-muted mb-5">
          Les modèles les plus appréciés par nos clients
        </p>

        <div className="row g-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <motion.div
                whileHover={{ y: -10 }}
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: '20px' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{
                    height: '260px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px'
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="fw-bold mb-2">
                    {product.name}
                  </h5>

                  <p
                    className="fw-bold mb-3"
                    style={{ color: '#6366f1' }}
                  >
                    {product.price.toLocaleString()} FCFA
                  </p>

                  <Link
                    to="/shop"
                    className="btn btn-outline-dark rounded-pill px-4"
                  >
                    Voir le produit
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AVANTAGES ================= */}
      <section className="container my-5">
        <div className="row text-center g-4">
          {[
            { icon: '🚚', title: 'Livraison rapide', text: 'Partout au Sénégal' },
            { icon: '💳', title: 'Paiement sécurisé', text: 'Wave & Orange Money' },
            { icon: '👟', title: 'Qualité premium', text: 'Produits sélectionnés' }
          ].map((item, index) => (
            <div key={index} className="col-md-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white shadow-sm rounded-4"
              >
                <h1>{item.icon}</h1>
                <h5 className="fw-bold mt-3">{item.title}</h5>
                <p className="text-muted">{item.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

            {/* ================= AVIS CLIENTS ================= */}
      <section
        className="py-5"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            💬 Ce que disent nos clients
          </h2>

          <p className="text-center text-muted mb-5">
            Des centaines de clients satisfaits à travers le Sénégal
          </p>

          <div className="row g-4">
            {[
              {
                name: 'Mamadou Diop',
                text:
                  'Chaussures très confortables et livraison rapide. Je recommande fortement Univers Shoes !',
                rating: 5
              },
              {
                name: 'Aïcha Fall',
                text:
                  'Très bonne qualité, exactement comme sur les photos. Service client au top.',
                rating: 4
              },
              {
                name: 'Cheikh Ndiaye',
                text:
                  'Prix abordables et produits stylés. Je repasserai commande sans hésiter.',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="col-md-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-100 p-4 shadow-sm rounded-4"
                  style={{
                    backgroundColor: '#f8fafc'
                  }}
                >
                  <div className="mb-3">
                    {'⭐'.repeat(review.rating)}
                  </div>

                  <p className="text-muted fst-italic">
                    “{review.text}”
                  </p>

                  <h6 className="fw-bold mt-3 mb-0">
                    {review.name}
                  </h6>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CTA FINAL ================= */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #6366f1, #4338ca)'
        }}
      >
        <h2 className="fw-bold mb-3">
          Prêt à améliorer votre style ?
        </h2>

        <p className="mb-4">
          Commandez maintenant et recevez vos chaussures rapidement
        </p>

        <Link
          to="/shop"
          className="btn btn-light btn-lg rounded-pill px-5"
        >
          Acheter maintenant
        </Link>
      </section>

    </div>
  );
};

export default Home;
