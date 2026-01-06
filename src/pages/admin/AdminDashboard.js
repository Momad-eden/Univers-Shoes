import { useEffect, useState } from "react";
import { useContext } from "react";
import { AdminLogContext } from "../../context/AdminLogContext";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const { logs = [] } = useContext(AdminLogContext);


  // Simulation appel API
  useEffect(() => {
    // ⚠️ Plus tard : fetch("/api/admin/stats")
    setTimeout(() => {
      setStats({
        products: 42,
        orders: 128,
        revenue: 1540000,
        users: 87,
      });
    }, 500);
  }, []);

  if (!stats) {
    return (
      <div className="p-4">
        <h5>Chargement des statistiques...</h5>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* TITRE */}
      <h2 className="fw-bold mb-4">Dashboard</h2>

      {/* STATS CARDS */}
      <div className="row g-4 mb-5">
        <StatCard title="Produits" value={stats.products} icon="👟" />
        <StatCard title="Commandes" value={stats.orders} icon="🧾" />
        <StatCard
          title="Chiffre d’affaires"
          value={`${stats.revenue.toLocaleString()} FCFA`}
          icon="💰"
        />
        <StatCard title="Utilisateurs" value={stats.users} icon="👤" />
      </div>

      {/* LOGS ADMIN */}
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Logs administrateur</h5>

          {logs.length === 0 ? (
            <p className="text-muted">Aucune activité récente</p>
          ) : (
            <ul className="list-group list-group-flush">
              {logs.slice(0, 6).map((log) => (
                <li key={log.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>{log.adminName}</strong> — {log.action}
                      <div className="text-muted small">{log.description}</div>
                    </div>
                    <span className="text-muted small">{log.createdAt}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ACTIVITÉ RÉCENTE */}
      <div className="card">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Activité récente</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">🧾 Nouvelle commande #1245</li>
            <li className="list-group-item">👤 Nouvel utilisateur inscrit</li>
            <li className="list-group-item">
              👟 Produit ajouté : Nike Air Max
            </li>
            <li className="list-group-item">
              💰 Paiement validé (Mobile Money)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

/* ========================
   COMPOSANT STAT CARD
======================== */
const StatCard = ({ title, value, icon }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fs-3">{icon}</span>
          </div>
          <h6 className="text-muted">{title}</h6>
          <h4 className="fw-bold">{value}</h4>
        </div>
      </div>
    </div>
  );
};
