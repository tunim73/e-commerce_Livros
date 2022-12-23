import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DetalhesLivro from './pages/DetalhesLivro'
import DetalhesAutor from './pages/DetalhesAutor'
import PagCadastros from './pages/PagCadastros'
import Home from "./pages/Home"
import Carrinho from "./pages/Carrinho"
import Pagamento from "./pages/Pagamento"
import DefaultPage from './components/DefaultPage';
import { listForPagCadastroAutor, listForPagCadastroLivro } from './data/forForms';
import Catalogo from "./pages/Catalogo"
import Historico from "./pages/HistoricoPedido"
const AppRouter = () => {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<DefaultPage/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='livro/detalhes' element={<DetalhesLivro/>}/>
                        <Route path='autor' element={ <PagCadastros infos = {listForPagCadastroAutor}/>}/>
                        <Route path='livro' element={ <PagCadastros infos = {listForPagCadastroLivro}/>}/>
                        <Route path='autor/detalhes' element={<DetalhesAutor/>}/>
                        <Route path='carrinho' element={<Carrinho/>}/>
                        <Route path='catalogo' element={<Catalogo/>}/>
                        <Route path='pagamento' element={<Pagamento/>}/>
                        <Route path='historico' element={<Historico/>}/>
                    </Route>
                </Routes>   
            </Router>
        </main>
    )
}
export default AppRouter