import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AdminLogContext } from "../context/AdminLogContext";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const { addLog } = useContext(AdminLogContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    // 🔐 Détection admin (mode développement)
    const isAdmin =
      email === "admin@universshoes.com" && password === "admin123";

    const user = {
      id: Date.now(),
      name: isAdmin ? "Admin" : "Client",
      role: isAdmin ? "admin" : "user",
      email,
    };

    // ✅ Login UNE SEULE FOIS
    login(user);

    // ✅ Log admin UNIQUEMENT si admin
    if (isAdmin) {
      addLog({
        adminName: "Admin",
        action: "Connexion",
        description: "Connexion au dashboard admin",
      });
    }

    toast.success("Connexion réussie");

    // Redirection
    navigate(isAdmin ? "/admin" : "/");
  };

  return (
    <div className="page-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container my-5"
      >
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow border-0 p-4">
              <h3 className="text-center mb-4">Connexion</h3>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="form-control mb-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button className="btn btn-dark w-100">
                  Se connecter
                </button>
              </form>

              <p className="text-center mt-3">
                Pas de compte ?{" "}
                <Link to="/register">Créer un compte</Link>
              </p>

              {/* AIDE DEV (OPTIONNEL) */}
              <div className="text-muted small mt-3">
                <strong>Admin :</strong> admin@universshoes.com / admin123
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
