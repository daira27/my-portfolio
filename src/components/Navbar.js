// this is my nav bar
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className = "navbar">
        <div className = "navbar-cointainer">
            <Link to= "/" className="navbar-logo">
                Daira
            </Link>
            <div className = 'menu-icon'>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
