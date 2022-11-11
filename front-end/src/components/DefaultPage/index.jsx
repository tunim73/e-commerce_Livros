
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const DefaultPage = () => {


    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )

    
}


export default DefaultPage