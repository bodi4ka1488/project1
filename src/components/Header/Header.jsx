import React from 'react';
import './Header.css'
import NavBar from './NavBar/NavBar';
const Header = () => {
    return (
      <header>
        <div>БізБуд</div>
        <NavBar/>
        <button>Зв'язатися</button>
      </header>
    );
};

export default Header;