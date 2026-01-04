import AdminSidebar from '../../components/AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="p-5 w-100">
        <h2 className="mb-4">📊 Tableau de bord</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>Total Produits</h5>
              <h2>12</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>Commandes</h5>
              <h2>5</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>Utilisateurs</h5>
              <h2>3</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
