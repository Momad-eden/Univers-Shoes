import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

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
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()} FCFA</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    {item.quantity}

                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    {(item.price * item.quantity).toLocaleString()} FCFA
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="text-end">
            Total :{' '}
            <span className="fw-bold">
              {total.toLocaleString()} FCFA
            </span>
          </h4>

          <button
            className="btn btn-dark float-end mt-3"
            onClick={() => navigate('/checkout')}
          >
            Passer au paiement
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
