import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import GifExpertApp from './GifExpertApp.tsx'
import "primereact/resources/themes/lara-dark-teal/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import './views/assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <GifExpertApp />
    </PrimeReactProvider>
  </React.StrictMode>,
)
