import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './ThemeContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <body>
        <App />
      </body>
    </ThemeContextProvider>
  </React.StrictMode>
);