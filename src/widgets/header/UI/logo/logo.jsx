import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../../public/Logo.png';
import './styles.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} alt="Logo" height="100px" />
      </NavLink>
    </div>
  );
};
