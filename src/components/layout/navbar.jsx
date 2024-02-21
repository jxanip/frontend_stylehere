import React from 'react';
//import '../../App.css'
import '../../assets/css/navbar.css';
import '../../assets/js/icon.js';
import logo from '../../assets/img/logoSH.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
         <div class="container-fluid">
           <img className='logo' src={logo} alt="icon" />
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
             <ul class="navbar-nav">
               <Link class="nav-item" to="/">
                 <a class="nav-link active" aria-current="page" href="#">Home</a>
               </Link>
               <Link class="nav-item" to="/Category">
                 <a class="nav-link" href="">Category  </a>
               </Link>
               <Link class="nav-item" to="/Pemesanan">
                  <a class="nav-link" href="">Pemesanan</a>
                </Link>
               <Link class="nav-item" to="/Contact">
                 <a class="nav-link" href="">Contact</a>
               </Link>
             </ul>
            
           </div>
         </div>
       </nav>
    );
}
export default Navbar;