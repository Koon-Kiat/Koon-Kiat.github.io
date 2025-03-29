
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app without any HMR handling
createRoot(document.getElementById("root")!).render(<App />);
