import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const Checkout = () => {
  // ⚠️ on harmonise avec le reste du projet
  const { cart } = useContext(CartContext);

  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    address: "",
    payment: "mobile",
  });

  const deliveryFee = 2000;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullname || !form.phone || !form.address) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    toast.success("Commande confirmée. Paiement en cours...");

    console.log("Commande :", {
      client: form,
      produits: cart,
      subtotal,
      deliveryFee,
      total,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container my-5"
    >
      <h2 className="text-center mb-5">Finaliser la commande</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted">
          Votre panier est vide
        </p>
      ) : (
        <div className="row g-5">

          {/* ================= FORMULAIRE ================= */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="mb-4">Informations de livraison</h5>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Nom complet"
                  className="form-control mb-3"
                  value={form.fullname}
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  className="form-control mb-3"
                  value={form.phone}
                  onChange={handleChange}
                />

                <textarea
                  name="address"
                  placeholder="Adresse de livraison"
                  className="form-control mb-4"
                  rows="3"
                  value={form.address}
                  onChange={handleChange}
                />

                <h6 className="mb-3">Méthode de paiement</h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="mobile"
                    checked={form.payment === "mobile"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    📱 Mobile Money
                  </label>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="card"
                    checked={form.payment === "card"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    💳 Carte bancaire
                  </label>
                </div>

                <button className="us-btn-primary w-100">
                  Confirmer & payer
                </button>
              </form>
            </div>
          </div>

          {/* ================= RÉSUMÉ AVANT PAIEMENT ================= */}
          <div className="col-md-5">
            <div className="order-summary">
              <h5 className="mb-4">Résumé de la commande</h5>

              {cart.map((item, index) => (
                <div key={index} className="order-item">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <p className="fw-semibold mb-1">
                      {item.name}
                    </p>
                    <small className="text-muted">
                      Pointure : {item.size}
                    </small>
                  </div>

                  <span>
                    {item.price.toLocaleString()} FCFA
                  </span>
                </div>
              ))}

              <hr />

              <div className="order-line">
                <span>Sous-total</span>
                <span>{subtotal.toLocaleString()} FCFA</span>
              </div>

              <div className="order-line">
                <span>Livraison</span>
                <span>{deliveryFee.toLocaleString()} FCFA</span>
              </div>

              <div className="order-total">
                <span>Total</span>
                <span>{total.toLocaleString()} FCFA</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </motion.div>
  );
};

export default Checkout;
