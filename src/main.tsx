import CurrentEvents from '@components/CurrentEvents.tsx';
import HorizontalScroll from '@components/HorizontalScroll.tsx';
import Test from '@components/Test.tsx';
import MerchadiseSection from '@components/merchandise/index.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MerchadiseSection />
  </React.StrictMode>
);
