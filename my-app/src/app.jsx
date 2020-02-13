import React from 'react';
import Header from './components/header/index';
import MainBanner from './components/mainBanner/index';
import SortPanel from './components/sortPanel/index';
import Sidebar from './components/sidebar/index';
import Content from './components/content/index';
import Footer from './components/footer/index';


const App = () => (
    <div className="app">
        <div className="container">
            <Header/>
            <MainBanner/>
            <SortPanel/>
            <div className="main-content">
                <Sidebar/>
                <Content/>
            </div>
            <Footer/>
        </div>
    </div>
);

export default App
