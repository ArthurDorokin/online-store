import React from 'react';
import './app.css';
import Header from '../header';
import MainBanner from '../mainBanner';
import SortPanel from '../sortPanel';
import Sidebar from '../sidebar';
import Content from '../content';
import Footer from '../footer';

const App = () => {

        return (
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

        )
};

export default App