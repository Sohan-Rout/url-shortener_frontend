import ShortenForm from "./components/ShortenForm";
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [urls, setUrls] = useState([]);

  return (
    <div className="app dark-mode">
      <nav className="navbar">
        <h1 className="navbar-title">HiveLink</h1>
        <div className="navbar-right">
          <button className="auth-button login-button">Login</button>
          <button className="auth-button signup-button">Signup</button>
        </div>
      </nav>

      <div className="main-content">
        <div className="content-box dark-box">
          <p className="welcome-text">Welcome to HiveLink here you can shorten urls for free.</p>
          <ShortenForm setUrls={setUrls} /> {/* Pass setUrls here */}
          
          {/* Add this section to display shortened URLs */}
          <div className="shortened-urls">
            {urls.map((url, index) => (
            <div key={index} className="url-item dark-url-item">
              <p>
                Short URL: <a href={url.fullUrl} target="_blank" rel="noopener noreferrer">
                {url.shortUrl}
                </a>
              </p>
            </div>
            ))}
          </div>
          <p className="privacy-text">By entering your url's you accept our <a href="#" className="privacy-link">privacy & policy terms</a></p>
        </div>
      </div>
    </div>
  );
};

export default App;