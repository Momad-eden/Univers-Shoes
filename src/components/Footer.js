import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-5">
      &copy; {new Date().getFullYear()} Univers-shoes. Tous droits réservés.
    </footer>
  );
};

export default Footer;
