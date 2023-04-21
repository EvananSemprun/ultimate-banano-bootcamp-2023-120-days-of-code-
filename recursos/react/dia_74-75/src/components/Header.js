import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNavActive = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" onClick={closeNav}>
            My Logo
          </Link>
        </div>
        <div className="hamburger-menu" onClick={toggleNavActive}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={navActive ? 'nav-links nav-active' : 'nav-links'}>
          <li>
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeNav}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;