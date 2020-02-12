import React from 'react';
import './app.css';
import Header from '../header';
import MainBanner from '../mainBanner';
import SortPanel from '../sortPanel';
import Sidebar from '../sidebar';
import Content from '../content';
import Footer from '../footer';

// TODO: remove it folder and index.js
// TODO: move app.js beside with the main index.js (in the root of src directory)
// tick here cursor and use Alt + Enter -> Remove braces around the arrow function
// format your code (redundant tabs)
// must be:
// const App = () => (
//    <div className="app">
//    ...
// );
const App = () => {
// remove space
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
// remove space
)
};

export default App