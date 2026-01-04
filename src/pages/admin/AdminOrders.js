import AdminSidebar from '../../components/AdminSidebar';

const AdminOrders = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="p-5 w-100">
        <h2 className="mb-4">🧾 Commandes</h2>

        <table className="table table-bordered shadow">
          <thead>
            <tr>
              <th>Client</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>momar@gmail.com</td>
              <td>70 000 FCFA</td>
              <td>
                <span className="badge bg-warning">
                  En attente
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
