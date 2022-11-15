import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import DetalhesLivro from './pages/DetalhesLivro'
import DetalhesAutor from './pages/DetalhesAutor'
import PagCadastros from './pages/PagCadastros'
import Home from "./pages/Home"
import Carrinho from "./pages/Carrinho"
import DefaultPage from './components/DefaultPage';
import { listForPagCadastroAutor, listForPagCadastroCategoria } from './data/forForms';
import Catalogo from "./pages/Catalogo"

const AppRouter = () => {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<DefaultPage/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='detalhesLivro' element={<DetalhesLivro/>}/>
                        <Route path='autor' element={ <PagCadastros infos = {listForPagCadastroAutor}/>}/>
                        <Route path='livro' element={ <PagCadastros infos = {listForPagCadastroCategoria}/>}/>
                        {/*<Route path='detalhesAutor' element={<DetalhesAutor/>}/>*/}
                        <Route path='carrinho' element={<Carrinho/>}/>
                        <Route path='catalogo' element={<Catalogo/>}/>
                    </Route>
                </Routes>   
            </Router>
        </main>
    )
}
export default AppRouter