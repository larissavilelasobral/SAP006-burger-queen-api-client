import React from 'react';
import background from '../../assets/img/fundo-login.jpg';
import logoImg from '../../assets/img/logo-combosburg.png';

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={background} className='background' alt="background hamburguer"></img>
      
      <img src={logoImg} className='logo' alt="logo combos burg"></img>
    </header>
  );
};

export default Header;