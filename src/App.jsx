import React from 'react';
import Header from './components/header';
import MainBanner from './components/mainBanner';
import SortPanel from './components/sortPanel';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Footer from './components/footer';

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
