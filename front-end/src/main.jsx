import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/global.scss';
import AppRouter from './AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter/>
	</React.StrictMode>
);
