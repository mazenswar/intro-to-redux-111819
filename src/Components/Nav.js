import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/visual">Visual</Link>
      <Link to="/essentials">Essentials</Link>
    </nav>
  );
}
