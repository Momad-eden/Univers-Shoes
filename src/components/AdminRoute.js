import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // ⏳ Attente chargement auth
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <span>Chargement...</span>
      </div>
    );
  }

  // 🔐 Pas connecté
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ⛔ Pas admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Accès autorisé
  return children;
};

export default AdminRoute;
