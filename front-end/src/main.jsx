import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './styles/reset.scss';
import './styles/global.scss';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RecoilRoot>
      <AppRouter/>
    </RecoilRoot>
	</React.StrictMode>

);
