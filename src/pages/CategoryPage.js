import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

/* ===== DONNÉES SEO & CONTENU PAR CATÉGORIE ===== */
const seoData = {
  homme: {
    title: 'Chaussures Homme – Style & Confort | Univers Shoes',
    description:
      'Découvrez notre collection de chaussures pour homme : sneakers, chaussures de ville et modèles confortables. Livraison rapide au Sénégal.'
  },
  femme: {
    title: 'Chaussures Femme – Élégance & Modernité | Univers Shoes',
    description:
      'Explorez notre sélection de chaussures femme modernes et élégantes. Confort, style et paiement sécurisé.'
  },
  enfant: {
    title: 'Chaussures Enfant – Confort & Résistance | Univers Shoes',
    description:
      'Chaussures enfant légères et résistantes, idéales pour le quotidien. Des modèles confortables pour tous les âges.'
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const seo = seoData[category];

  // Sécurité si catégorie inconnue
  if (!seo) {
    return (
      <div className="container my-5 text-center">
        <h4>Catégorie introuvable</h4>
      </div>
    );
  }

  const filteredProducts = products.filter(
    (p) => p.category === category
  );

  return (
    <>
      {/* ===== SEO (HEAD) ===== */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      {/* ===== CONTENU PAGE ===== */}
      <div className="container my-5">

        {/* HEADER CATÉGORIE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5"
        >
          <h1 className="fw-bold mb-2">
            {seo.title}
          </h1>
          <p className="text-muted">
            {seo.description}
          </p>
        </motion.div>

        {/* PRODUITS */}
        {filteredProducts.length === 0 ? (
          <p>Aucun produit disponible dans cette catégorie.</p>
        ) : (
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card h-100 border-0 shadow-sm"
                  style={{ borderRadius: '18px' }}
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top"
                      style={{
                        height: '240px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '18px',
                        borderTopRightRadius: '18px'
                      }}
                    />
                  </Link>

                  <div className="card-body d-flex flex-column">
                    <h6 className="fw-bold">
                      {product.name}
                    </h6>

                    <p className="fw-bold mb-3">
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
        )}

      </div>
    </>
  );
};

export default CategoryPage;
