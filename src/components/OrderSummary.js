import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OrderSummary = ({ onConfirm }) => {
  const { cart } = useContext(CartContext);

  const deliveryFee = 2000;

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const total = subtotal + deliveryFee;

  return (
    <div className="order-summary">
      <h4>Résumé de la commande</h4>

      {/* PRODUITS */}
      {cart.map((item, index) => (
        <div key={index} className="order-item">
          <img src={item.image} alt={item.name} />

          <div>
            <p className="fw-semibold">{item.name}</p>
            <small>Pointure : {item.size}</small>
          </div>

          <span>
            {(item.price * (item.quantity || 1)).toLocaleString()} FCFA
          </span>
        </div>
      ))}

      <hr />

      {/* PRIX */}
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

      <button
        className="us-btn-primary w-100 mt-4"
        onClick={onConfirm}
        disabled={cart.length === 0}
      >
        Confirmer & payer
      </button>
    </div>
  );
};

export default OrderSummary;
