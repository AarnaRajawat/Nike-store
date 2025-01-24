import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Replace with the correct path to your CSS file
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
