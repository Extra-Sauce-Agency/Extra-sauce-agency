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
  console.error('Global error:', e.error);
  (window as any).__lastError = e.error;
  (window as any).__lastErrorString = String(e.error);
  (window as any).__lastErrorStack = e.error instanceof Error ? e.error.stack : 'No stack';
})

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  (window as any).__lastError = e.reason;
  (window as any).__lastErrorString = String(e.reason);
  (window as any).__lastErrorStack = e.reason instanceof Error ? e.reason.stack : 'No stack';
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
