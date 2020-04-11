import React from 'react';
import Header from './modules/header';
import MainBanner from './modules/mainBanner';
import SortPanel from './modules/sortPanel';
import Sidebar from './modules/sidebar';
import Content from './modules/content';
import Footer from './modules/footer';
import CardProduct from './modules/сardProduct';

const App = () => (
    <div className="app">
        <div className="container">
            <Header/>
            <MainBanner/>
            <SortPanel/>
            <div className="main-content">
                <Sidebar/>
                {/*{CurrentGood ? <Good /> : <Content/>}*/}
                <Content/>
                <CardProduct/>
            </div>
            <Footer/>
        </div>
    </div>
);
export default App;
