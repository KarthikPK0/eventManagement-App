import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <div style={{position:'relative'}}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light  shadow fixed-top pt-3 pb-3'>
        <div className='container-fluid'>
          <span style={{color:'#000B6D'}} className='navbar-brand d-flex align-items-center logo fs-4 fw-bold'>
            <img width={'32px'} className='img-fluid me-2' src={logo} alt="logo" />
            EVENTO

          </span>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href="#">HOME</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">All EVENTS</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">ABOUT</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">CONTACT</a>
              </li>
            </ul>
            <button className='btn btn-primary hButton'>Create account</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
