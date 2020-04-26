import React from 'react';
import Header from './modules/header';
import MainBanner from './modules/mainBanner';
import SortPanel from './modules/sortPanel';
import Sidebar from './modules/sidebar';
import Content from './modules/content';
import Footer from './modules/footer';
import CardProduct from "./modules/сardProduct";
import Basket from "./modules/basket";
import {connect} from "react-redux";


const App = ({product, basket}) => (
    <div className="app">
        <div className="container">
            <Header/>
            <MainBanner/>
            <SortPanel/>
            <div className="main-content">
                <Sidebar/>
                <Content/>
                {product && <CardProduct product={product}/>}
                {basket && <Basket basket={basket}/>}
            </div>
            <Footer/>
        </div>
    </div>
);

const mapStateToProps = ({cartProductStore, BasketStore}) => ({
    product: cartProductStore,
    basket: BasketStore
});

export default connect(mapStateToProps)(App);
