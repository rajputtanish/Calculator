import React from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter } from 'react-router';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Footer/>
        </BrowserRouter>
    )
    
}

export default App;
