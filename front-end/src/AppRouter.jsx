import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import DetalhesLivro from './pages/DetalhesLivro'
import DetalhesAutor from './pages/DetalhesAutor'
import PagCadastros from './pages/PagCadastros'
import Home from "./pages/Home"
import DefaultPage from './components/DefaultPage';
import { listForPagCadastroAutor, listForPagCadastroCategoria } from './data/forForms';

const AppRouter = () => {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<DefaultPage/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='Livrod' element={<DetalhesLivro/>}/>
                        <Route path='autor' 
                            element={ <PagCadastros infos = {listForPagCadastroAutor}/>}/>
                        <Route path='livro' 
                            element={ <PagCadastros infos = {listForPagCadastroCategoria}/>}/>
                        <Route path='detalhesAutor' element={<DetalhesAutor/>}/>
                    </Route>
                </Routes>   
            </Router>
        </main>
    )
}
export default AppRouter