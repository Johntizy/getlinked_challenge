import React from 'react';
import './Navbar.css';
import images from '../constants';
import { useState } from 'react';

const Menu = () => (
  <>
  <p><a href='#header'>Timeline</a></p>
  <p><a href='#whatgpt'>Overview</a></p>
  <p><a href='#possibility'>FAQs</a></p>
  <p><a href='#attributes'>Contact</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className='navbar_links'>
            <div className='navbar_logo'>
            <img src={images.getlinked} alt='Logo' />
            </div>
            <div className='navbar_links_container'>
                <Menu />
            </div>
            <div className='navbar_sign'>
                <button type='button'>Register</button>
            </div>
        </div>
      
        <div className='navbar_menu'>
            {toggleMenu ? <a color="#fff" onClick={() => setToggleMenu(false)} className='close'><img src={images.close}  /></a> : <a color="#fff" onClick={() => setToggleMenu(true)} ><img src={images.toggle}  /></a>}
            {toggleMenu && 
            <div className='navbar_menu_container scale-up-center'>
                <div className='navbar_menu_links'>
                <Menu />
                <div className='navbar_menu_sign'>
                    <button type='button'>Register</button>
                </div>
                </div>
            </div>
            }
        </div>
        </div>
  )
}

export default Navbar