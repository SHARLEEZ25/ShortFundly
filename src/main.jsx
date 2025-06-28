import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Work from './Thework.jsx'
import { HelmetProvider } from 'react-helmet-async'; 
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
      
        <Routes>
         
          
          <Route path="/" element={<App />} />
          <Route path="/Thework" element={<Work />} />
         
         
          {/* Add more routes as needed */}
        </Routes>
        
        
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
