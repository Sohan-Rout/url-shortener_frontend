import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'// Ensure this path matches your actual CSS file location
import App from './App.jsx'
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
