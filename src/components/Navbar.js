import { Link, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect, useRef } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();

  // ===== CONTEXTS =====
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  // ===== STATES =====
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);

  const lastScrollY = useRef(0);

  const isHome = location.pathname === '/';

  // ===== SCROLL LOGIC =====
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar devient solide après scroll
      if (isHome) {
        setSolid(scrollY > 80);
      }

      if (menuOpen) return;

      if (scrollY < 80) {
        setHidden(false);
        lastScrollY.current = scrollY;
        return;
      }

      if (scrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen, isHome]);

  // Fermer menu à chaque navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Masquer navbar sur admin
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header
      className={`us-navbar
        ${hidden ? 'us-navbar--hidden' : ''}
        ${isHome && !solid ? 'us-navbar--transparent' : ''}
      `}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between px-4">

        {/* LOGO */}
        <Link to="/" className="us-logo">
          Univers<span>Shoes</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="us-menu d-none d-md-flex">
          <Link to="/shop">Boutique</Link>
          <Link to="/category/homme">Homme</Link>
          <Link to="/category/femme">Femme</Link>
          <Link to="/category/enfant">Enfant</Link>
        </nav>

        {/* ACTIONS */}
        <div className="us-actions d-flex align-items-center gap-3">

          {/* PANIER */}
          <Link to="/cart" className="us-icon" aria-label="Panier">
            🛒
            {cart.length > 0 && (
              <span className="us-badge">{cart.length}</span>
            )}
          </Link>

          {/* AUTH */}
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" className="us-admin-link">
                  Admin
                </Link>
              )}
              <button onClick={logout} className="us-link-btn">
                Déconnexion
              </button>
            </>
          ) : (
            <Link to="/login" className="us-link-btn">
              Connexion
            </Link>
          )}

          {/* BURGER */}
          <button
            className={`us-burger d-md-none ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="us-mobile-menu d-md-none">
          <Link to="/shop">Boutique</Link>
          <Link to="/category/homme">Homme</Link>
          <Link to="/category/femme">Femme</Link>
          <Link to="/category/enfant">Enfant</Link>

          <hr />

          <Link to="/cart">Panier ({cart.length})</Link>

          {user ? (
            <>
              {user.role === 'admin' && <Link to="/admin">Admin</Link>}
              <button onClick={logout} className="us-link-btn">
                Déconnexion
              </button>
            </>
          ) : (
            <Link to="/login">Connexion</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
