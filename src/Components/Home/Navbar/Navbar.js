import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
     <header>
         <h4 className="logo">Mamun Ahmed</h4>
         <nav>
             <ul className="nav_links">
                 <li><a href="#">About</a></li>
                 <li><a href="#">Skills</a></li>
                 <li><a href="#">Projects</a></li>
                 <li><a href="#">Blog</a></li>
             </ul>
         </nav>
         <a className="cta" href="#"><button>Contact</button></a>
     </header>
    );
};

export default Navbar;