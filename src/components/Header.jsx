// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <h1>T.J. Agerter</h1>
      <nav>
      <Navigation />
      </nav>
    </header>
  );
}

export default Header;
