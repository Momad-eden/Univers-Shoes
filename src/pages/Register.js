import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    toast.success('Compte créé avec succès');
    navigate('/login');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container my-5"
    >
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow border-0 p-4">
            <h3 className="text-center mb-4">Créer un compte</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                className="form-control mb-3"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                value={form.email}
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                className="form-control mb-3"
                value={form.password}
                onChange={handleChange}
              />

              <button className="btn btn-dark w-100">
                S’inscrire
              </button>
            </form>

            <p className="text-center mt-3">
              Déjà un compte ? <Link to="/login">Se connecter</Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
