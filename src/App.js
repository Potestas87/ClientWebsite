import './App.css';
import MenuBar from './MenuBar';
import AboutMe from './AboutMe.js';
import Services from './Services.js';
import ContactMe from './ContactMe.js';
import Portfolio from './Portfolio.js';
import HomePage from './HomePage.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      <MenuBar />
      {location.pathname === '/' && <HomePage />}  

      <Routes>
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}
