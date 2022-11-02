import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import CadastroLivro from './pages/CadastroLivro'
import DetalhesLivro from './pages/DetalhesLivro'

import Home from "./pages/Home"

const AppRouter = () => {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Livro' element={<CadastroLivro/> }/>
                    <Route path='/Livrod' element={<DetalhesLivro/> }/>
                </Routes>   
            </Router>
        </main>
    )
}
export default AppRouter