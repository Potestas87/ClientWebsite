import './MenuBar.css';
import AboutMe from './AboutMe.js';
import Services from './Services.js';
import ContactMe from './ContactMe.js';
import Portfolio from './Portfolio.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function MenuBar() {
  return (
    <nav className="menu-bar">
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li className="menu-item">
          <Link to="/Services">Services</Link>
        </li>
        <li className="menu-item">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="menu-item">
          <Link to="/ContactMe">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;