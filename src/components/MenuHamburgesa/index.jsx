import React, { useState } from 'react';
import './estilos.css'; // Importa los estilos CSS

function MenuHamburguesa() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-container">
      
    </div>
  )
}

export default MenuHamburguesa;

