import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // SIMULATION LOGIN
  const login = (email) => {
    // Règle simple : email admin = ADMIN
    const role = email === 'admin@univers-shoes.com' ? 'admin' : 'user';

    setUser({
      email,
      role
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
