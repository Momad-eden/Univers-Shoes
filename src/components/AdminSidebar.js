import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? 'bg-secondary rounded px-2'
      : '';

  return (
    <div
      className="bg-dark text-white p-4"
      style={{ minHeight: '100vh', width: '240px' }}
    >
      {/* TITRE */}
      <h4 className="fw-bold mb-4">Admin Panel</h4>

      {/* MENU */}
      <ul className="nav flex-column gap-2">

        {/* DASHBOARD */}
        <li className="nav-item">
          <Link
            className={`nav-link text-white ${isActive('/admin')}`}
            to="/admin"
          >
            📊 Dashboard
          </Link>
        </li>

        {/* VENTES */}
        <li className="nav-item">
          <Link
            className={`nav-link text-white ${isActive('/admin/sales')}`}
            to="/admin/sales"
          >
            💰 Ventes
          </Link>
        </li>

        {/* COMMANDES */}
        <li className="nav-item">
          <Link
            className={`nav-link text-white ${isActive('/admin/orders')}`}
            to="/admin/orders"
          >
            🧾 Commandes
          </Link>
        </li>

        {/* PRODUITS */}
        <li className="nav-item">
          <Link
            className={`nav-link text-white ${isActive('/admin/products')}`}
            to="/admin/products"
          >
            👟 Produits
          </Link>
        </li>

        {/* RAPPORTS */}
        <li className="nav-item">
          <Link
            className={`nav-link text-white ${isActive('/admin/reports')}`}
            to="/admin/reports"
          >
            📈 Rapports
          </Link>
        </li>

        <hr className="text-secondary" />

        {/* RETOUR AU SITE */}
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            ⬅️ Retour au site
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
