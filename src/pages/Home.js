import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  const featured = products.slice(0, 3);

  return (
    <main>
      <section className="hero-video">
        <video className="hero-video-bg" autoPlay muted loop playsInline>
          <source src="/videos/video-bg.mp4" type="video/mp4" />
        </video>

        <div className="hero-video-overlay" />

        <div className="hero-text">
          <span className="hero-eyebrow">Nouvelle collection</span>

          <h1>
            Avancez avec
            <br />
            assurance
          </h1>

          <p>
            Des chaussures pensées pour le confort, le style et la durabilité.
          </p>

          <div className="hero-cta">
            <Link to="/shop" className="btn-hero btn-1">
              Explorer la collection
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MANIFESTE ================= */}
      <section className="brand-manifesto">
        <h2>Univers Shoes</h2>
        <p>
          Nous créons des chaussures qui accompagnent chaque moment de votre
          quotidien. Un équilibre entre style, confort et exigence, pensé pour
          durer.
        </p>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <section className="collections-xl">
        {[
          {
            title: "Homme",
            subtitle: "Urbain • Élégant • Confort",
            cat: "homme",
            img: "/images/img-cuire.jpg",
          },
          {
            title: "Femme",
            subtitle: "Moderne • Audacieuse • Légère",
            cat: "femme",
            img: "/images/img.jpg",
          },
          {
            title: "Enfant",
            subtitle: "Solide • Confort • Liberté",
            cat: "enfant",
            img: "/images/img-enf.jpg",
          },
        ].map((c, i) => (
          <Link
            key={i}
            to={`/category/${c.cat}`}
            className="collection-block"
            style={{ backgroundImage: `url(${c.img})` }}
          >
            <div className="collection-overlay">
              <h2>{c.title}</h2>
              <p>{c.subtitle}</p>
              <span>Explorer</span>
            </div>
          </Link>
        ))}
      </section>

      {/* ================= PRODUITS PHARES ================= */}
      <section className="featured-xl">
        <h2>Sélection du moment</h2>

        <div className="featured-grid">
          {featured.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="featured-card"
            >
              <img src={product.image} alt={product.name} />
              <div className="featured-info">
                <h4>{product.name}</h4>
                <span>{product.price.toLocaleString()} FCFA</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CTA FINAL PREMIUM ================= */}
      <section className="cta-xl">
        <div className="cta-content">
          <span className="cta-eyebrow">Univers Shoes</span>

          <h2>
            Chaque pas
            <br />
            raconte une histoire
          </h2>

          <p>
            Explorez une collection conçue pour ceux qui avancent avec style,
            exigence et caractère.
          </p>

          <Link to="/shop" className="btn-hero">
            Explorer la boutique
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
