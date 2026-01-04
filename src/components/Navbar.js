import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        👟 Univers Shoes
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto align-items-center gap-3">

          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Boutique
            </Link>
          </li>

          <li className="nav-item position-relative">
            <Link className="nav-link" to="/cart">
              🛒 Panier
              {cart.length > 0 && (
                <span
                  className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                >
                  {cart.length}
                </span>
              )}
            </Link>
          </li>

          {/* ADMIN */}
          {user && user.role === 'admin' && (
            <li className="nav-item">
              <Link className="nav-link text-warning fw-bold" to="/admin">
                Admin
              </Link>
            </li>
          )}

          {/* AUTH */}
          {user ? (
            <>
              <li className="nav-item text-white">
                {user.email}
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={logout}
                >
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="btn btn-outline-light btn-sm" to="/login">
                Connexion
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
