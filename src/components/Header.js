import React, { Component } from 'react';
import '../styles/Header.css';
import { BsCart4 } from 'react-icons/bs';
import { RxHome } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header>

        <Link to="/">
          <RxHome className="icon-home" />
        </Link>
        <img
          className="header-logo"
          src={ logo }
          alt="Logo front-end store"
        />
        <Link to="/carrinho-de-compras">
          <BsCart4 className="icon-cart" />
        </Link>
      </header>
    );
  }
}
