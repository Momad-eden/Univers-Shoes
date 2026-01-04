import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const [form, setForm] = useState({
    fullname: '',
    phone: '',
    address: '',
    payment: 'mobile'
  });

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullname || !form.phone || !form.address) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    // Simulation paiement
    toast.success('Paiement en cours de traitement...');
    console.log('Commande envoyée :', {
      client: form,
      produits: cartItems,
      total
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container my-5"
    >
      <h2 className="text-center mb-4">💳 Paiement</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">
          Votre panier est vide
        </p>
      ) : (
        <div className="row">
          {/* FORMULAIRE */}
          <div className="col-md-7">
            <div className="card shadow border-0 p-4 mb-4">
              <h5 className="mb-3">Informations client</h5>

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
                  className="form-control mb-3"
                  rows="3"
                  value={form.address}
                  onChange={handleChange}
                />

                <h6 className="mt-3">Méthode de paiement</h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="mobile"
                    checked={form.payment === 'mobile'}
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
                    checked={form.payment === 'card'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    💳 Carte bancaire
                  </label>
                </div>

                <button className="btn btn-dark w-100">
                  Payer maintenant
                </button>
              </form>
            </div>
          </div>

          {/* RÉCAP */}
          <div className="col-md-5">
            <div className="card shadow border-0 p-4">
              <h5 className="mb-3">Résumé</h5>

              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>{item.name}</span>
                  <span>{item.price} FCFA</span>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>{total} FCFA</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Checkout;
