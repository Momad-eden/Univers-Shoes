import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div
      className="bg-dark text-white p-4"
      style={{ minHeight: '100vh', width: '240px' }}
    >
      <h4 className="fw-bold mb-4">Admin Panel</h4>

      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin">
            📊 Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/products">
            👟 Produits
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/orders">
            🧾 Commandes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
