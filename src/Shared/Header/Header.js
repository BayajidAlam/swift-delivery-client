import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assets/swift.png'
const Header = () => {
  return (
    <div className="navbar bg-slate-300 mt-0 rounded">
    <div className="navbar-start">
      
      <div className="dropdown">

        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>

        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li tabIndex={0}>
            <a className="justify-between">
              Parent
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>

      </div>

      <Link to='/' className='flex items-center'><img className='w-12 h-12  ml-10' src={Img} alt="" /><p className='text-4xl font-bold ml-3 p-4'>Swift Delivery</p>
      </Link>

    </div>
    <div className="navbar-center hidden lg:flex">
      <Link to='/services'>Services</Link>
    </div>
    <div className="navbar-end">
      <p>logout</p>
    </div>
  </div>
  );
};

export default Header;