import React from 'react';
import Header from './modules/header';
import MainBanner from './modules/mainBanner';
import SortPanel from './modules/sortPanel';
import Sidebar from './modules/sidebar';
import Content from './modules/content';
import Footer from './modules/footer';

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
export default App;
