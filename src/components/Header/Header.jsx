import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <nav className=''>
      <div className='header'>
        <img src={logo} alt="" />
        <div className='menu-items' >
          <Link to="/">Shop</Link>
          <Link to="order">Order</Link>
          <Link to="inventory">Manage Inventory</Link>
          <Link to="login">Login</Link>
          <Link to="signup">SignUp</Link>

        </div>
      </div>
    </nav>
  );
};

export default Header;