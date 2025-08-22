import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Favourites from './pages/Favourites';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Settings from './pages/Settings';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
      if (!mobileView) {
        setIsSidebarCollapsed(false); // Sidebar não colapsada por padrão no desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  
  const mainContentStyle = {
    marginLeft: isMobile ? '0' : (isSidebarCollapsed ? '90px' : '270px'), 
    transition: 'margin-left 0.4s ease'
  };

  return (
    <Router>
      {isMobile && isSidebarCollapsed && (
        <nav className="site-nav">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <span className="material-symbols-rounded">chevron_right</span>
          </button>
        </nav>
      )}
      <div className="app-container">
        <Sidebar 
          isMobile={isMobile} 
          isCollapsed={isSidebarCollapsed} 
          toggleSidebar={toggleSidebar} 
        />
        <main className="main-content" style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;