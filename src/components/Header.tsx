import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Bloggers</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
}
