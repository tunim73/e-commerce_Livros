import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import CadastroLivro from './pages/CadastroLivro'


import Home from "./pages/Home"

const AppRouter = () => {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Livro' element={<CadastroLivro/> }/>
                </Routes>   
            </Router>
        </main>
    )
}
export default AppRouter