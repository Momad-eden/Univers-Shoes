import { createContext, useState } from "react";

export const AdminLogContext = createContext();

export const AdminLogProvider = ({ children }) => {
  const [logs, setLogs] = useState([
    {
      id: 1,
      adminName: "Admin",
      action: "Connexion",
      description: "Connexion au dashboard",
      createdAt: "2026-01-06 10:12",
    },
    {
      id: 2,
      adminName: "Admin",
      action: "Ajout produit",
      description: "Produit Nike Air Max ajouté",
      createdAt: "2026-01-06 10:45",
    },
  ]);

  // ➕ Ajouter un log
  const addLog = (log) => {
    setLogs((prev) => [
      {
        id: Date.now(),
        createdAt: new Date().toLocaleString(),
        ...log,
      },
      ...prev,
    ]);
  };

  return (
    <AdminLogContext.Provider value={{ logs, addLog }}>
      {children}
    </AdminLogContext.Provider>
  );
};
