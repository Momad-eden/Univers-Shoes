import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    decreaseQty,
    addToCart,
    total
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Mon Panier</h2>

      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          <table className="table shadow">
            <thead>
              <tr>
                <th>Produit</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size}`}
                  item={item}
                  onIncrease={addToCart}
                  onDecrease={decreaseQty}
                  onRemove={removeFromCart}
                />
              ))}
            </tbody>
          </table>

          <h4 className="text-end mt-4">
            Total :{" "}
            <span className="fw-bold">
              {total.toLocaleString()} FCFA
            </span>
          </h4>

          <button
            className="btn btn-dark float-end mt-3"
            onClick={() => navigate("/checkout")}
          >
            Passer au paiement
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
