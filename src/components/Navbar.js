import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active">Главная</NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active">О сайте</NavLink>
      <NavLink to="/items" className="nav-link" activeClassName="active">Список</NavLink>
      <NavLink to="/subscribe" className="nav-link" activeClassName="active">Подписка</NavLink>
    </nav>
  );
};

export default Navbar;
