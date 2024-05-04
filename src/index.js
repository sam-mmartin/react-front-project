import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/material/material-kit.css';
import './css/material/demo.css';
import './css/material/vertical-nav.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
