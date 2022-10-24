import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.scss'
import './styles/global.scss'
import Home from './pages/Home'
import CadastroLivro from './pages/CadastroLivro'

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode >
    <CadastroLivro/> 
  </React.StrictMode>
)