import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import AdminSidebar from "../../components/AdminSidebar";
import { AdminLogContext } from "../../context/AdminLogContext";

const AdminProducts = () => {
  const { products, addProduct, updateProduct, deleteProduct } =
    useContext(ProductContext);

  const { addLog } = useContext(AdminLogContext);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      updateProduct({ ...form, id: editingId });

      addLog({
        adminName: "Admin",
        action: "Modification produit",
        description: `Produit "${form.name}" modifié`,
      });

      setEditingId(null);
    } else {
      addProduct({
        name: form.name,
        price: Number(form.price),
        image: form.image || "https://via.placeholder.com/150",
      });

      addLog({
        adminName: "Admin",
        action: "Ajout produit",
        description: `Produit "${form.name}" ajouté`,
      });
    }

    setForm({ name: "", price: "", image: "" });
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product.id);
  };

  const handleDelete = (product) => {
    deleteProduct(product.id);

    addLog({
      adminName: "Admin",
      action: "Suppression produit",
      description: `Produit "${product.name}" supprimé`,
    });
  };

  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="p-5 w-100">
        <h2 className="mb-4">👟 Gestion des produits</h2>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow">
          <h5 className="mb-3">
            {editingId ? "Modifier le produit" : "Ajouter un produit"}
          </h5>

          <input
            className="form-control mb-2"
            placeholder="Nom du produit"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Prix"
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="URL image"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <button className="btn btn-dark">
            {editingId ? "Mettre à jour" : "Ajouter"}
          </button>
        </form>

        {/* LISTE PRODUITS */}
        <table className="table table-striped shadow">
          <thead>
            <tr>
              <th>Image</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt="" width="60" />
                </td>
                <td>{p.name}</td>
                <td>{p.price.toLocaleString()} FCFA</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(p)}
                  >
                    Modifier
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(p)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
