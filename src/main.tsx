import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './lib/emailjs'

// Initialize EmailJS
initEmailJS();

// Simple error handler for production
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error)
})

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason)
})

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  const root = createRoot(rootElement);
  
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  // Store error globally for debugging
  (window as any).__lastError = error;
  (window as any).__lastErrorString = String(error);
  (window as any).__lastErrorStack = error instanceof Error ? error.stack : 'No stack';
  // Fallback content
  document.body.innerHTML = '<div style="padding: 20px; text-align: center;">Loading failed. Please refresh the page.</div>';
}
