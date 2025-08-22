import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../assets/Logo.png';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/analytics', label: 'Analytics', icon: 'insert_chart' },
  { path: '/notifications', label: 'Notifications', icon: 'notifications' },
  { path: '/favourites', label: 'Favourites', icon: 'star' },
  { path: '/products', label: 'Products', icon: 'storefront' },
  { path: '/customers', label: 'Customers', icon: 'group' },
  { path: '/settings', label: 'Settings', icon: 'settings' },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkTheme(initialTheme);
    document.body.classList.toggle('dark-theme', initialTheme);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <header className="sidebar-header">
        <img src={Logo} alt="CodingManoel" className="header-logo" />
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="material-symbols-rounded">chevron_left</span>
        </button>
      </header>
      <div className="sidebar-content">
        <form className="search-form">
          <span className="material-symbols-rounded">search</span>
          <input type="search" placeholder="Search..." required />
        </form>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li className="menu-item" key={item.path}>
              <Link
                to={item.path}
                className={`menu-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="material-symbols-rounded">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-footer">
        <button className="theme-toggle" onClick={toggleTheme}>
          <div className="theme-label">
            <span className="theme-icon material-symbols-rounded">
              {isDarkTheme ? 'light_mode' : 'dark_mode'}
            </span>
            <span className="theme-text">Dark Mode</span>
          </div>
          <div className="theme-toggle-track">
            <div className="theme-toggle-indicator"></div>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;