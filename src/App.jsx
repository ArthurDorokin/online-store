import React from 'react';
import Header from './modules/header';
import MainBanner from './modules/mainBanner';
import SortPanel from './modules/sortPanel';
import Sidebar from './modules/sidebar';
import Content from './modules/content';
import Footer from './modules/footer';
import CardProduct from "./modules/сardProduct";
import {connect} from "react-redux";


const App = ({product}) => (
    <div className="app">
        <div className="container">
            <Header/>
            <MainBanner/>
            <SortPanel/>
            <div className="main-content">
                <Sidebar/>
                <Content/>
                {product && <CardProduct product={product}/>}
            </div>
            <Footer/>
        </div>
    </div>
);

const mapStateToProps = ({cartProductStore}) => ({
    product: cartProductStore,
});

export default connect(mapStateToProps)(App);
