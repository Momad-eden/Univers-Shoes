import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { AdminLogProvider } from "./context/AdminLogContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <AdminLogProvider>
            <App />
            </AdminLogProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
