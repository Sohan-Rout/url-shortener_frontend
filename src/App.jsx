import ShortenForm from "./components/ShortenForm";
import React, { useState } from 'react';
import { Moon, Sun } from "lucide-react"; // Import the icons
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [urls, setUrls] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className={`navbar ${darkMode ? 'dark-navbar' : 'light-navbar'}`}>
        <h1 className="navbar-title">HiveLink</h1>
        <div className="theme-control">
          {darkMode ? (
            <Moon className="theme-icon" size={20} />
          ) : (
            <Sun className="theme-icon" size={20} />
          )}
          <button onClick={toggleTheme} className="theme-toggle">
            <div className={`theme-toggle-circle ${darkMode ? 'dark' : 'light'}`} />
          </button>
        </div>
      </nav>

      <div className="main-content">
        <div className={`content-box ${darkMode ? 'dark-box' : 'light-box'}`}>
          <p className="welcome-text">Welcome to LinkHive here you can shorten urls for free and build custom urls.</p>
          <ShortenForm darkMode={darkMode} setUrls={setUrls} /> {/* Pass setUrls here */}
          
          {/* Add this section to display shortened URLs */}
          <div className="shortened-urls">
            {urls.map((url, index) => (
            <div key={index} className={`url-item ${darkMode ? 'dark-url-item' : 'light-url-item'}`}>
              <p>
                Short URL: <a href={url.fullUrl} target="_blank" rel="noopener noreferrer">
                {url.shortUrl}
                </a>
              </p>
            </div>
            ))}
          </div>

          <div className="divider" />
          <p className="signup-text">Signup or login to see past urls</p>

          <div className="social-buttons">
            <button className="social-button google-button">
              <svg viewBox="0 0 24 24" className="social-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4" />
              </svg>
              Continue With Google
            </button>
            <button className="social-button apple-button">
              <svg className="social-icon" viewBox="0 0 24 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
              </svg>
              Continue With Apple
            </button>
          </div>

          <div class="divider"></div>
          <p className="signup-text">Or</p>

          <div className="auth-inputs">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className={`auth-input ${darkMode ? 'dark-input' : 'light-input'}`} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" className={`auth-input ${darkMode ? 'dark-input' : 'light-input'}`} />
          </div>

          <button class="continue-button">
            Continue
          </button>

          <p className="privacy-text">By entering your details you accept our <a href="#" className="privacy-link">privacy & policy terms</a></p>
        </div>
      </div>
    </div>
  );
};

export default App;
