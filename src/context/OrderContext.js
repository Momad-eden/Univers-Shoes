import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // ➕ Créer commande
  const createOrder = ({ client, items, total, payment }) => {
    const newOrder = {
      id: Date.now(),
      client,
      items,
      total,
      payment,
      status: "en attente",
      createdAt: new Date()
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  // 🔄 Changer statut
  const updateOrderStatus = (id, status) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, status } : o
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        updateOrderStatus
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
