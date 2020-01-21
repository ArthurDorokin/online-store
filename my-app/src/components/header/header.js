import React from 'react';
import './header.css';

const Header = () => {

    return (
        <div className="header">
            <div className="strip">
                <p>Free shipping for orders above USD 150</p>
            </div>
            <div className="main-navigation-head">
                <div className="wrap-l-m">
                    <div className="logo">
                        <img src="../img/Logo.svg" alt=""/>
                    </div>
                    <div className="list-menu">
                        <ul id="my-drop-down-menu">
                            <li className="list"><a href="#" className="link">SHOP</a>
                                <p><span></span><span></span></p>
                                <ul className="child">
                                    <li><a href="#">плагины</a></li>
                                    <li><a href="#">темы</a></li>
                                    <li><a href="#">хаки</a></li>
                                </ul>
                            </li>
                            <li className="list"><a href="#" className="link">FABRIC</a>
                                <p><span></span><span></span></p>
                                <ul className="child">
                                    <li><a href="#">компоненты</a></li>
                                    <li><a href="#">модули</a></li>
                                </ul>
                            </li>
                            <li className="list"><a href="#" className="link">JOURNAL</a>
                                <p><span></span><span></span></p>
                                <ul className="child">
                                    <li><a href="#">компоненты</a></li>
                                    <li><a href="#">модули</a></li>
                                    <li><a href="#">хаки</a></li>
                                    <li><a href="#">модули</a></li>
                                </ul>
                            </li>
                            <li className="list"><a href="#" className="link">ABOUT</a>
                                <p><span></span><span></span></p>
                                <ul className="child">
                                    <li><a href="#">плагины</a></li>
                                    <li><a href="#">темы</a></li>
                                    <li><a href="#">плагины</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="control-order">
                    <ul>
                        <li>WELCOME, ALEX<img src="../img/Rectangle.svg" alt=""/></li>
                        <li><img src="../img/search.svg" alt=""/></li>
                        <li><img src="../img/Heart.svg" alt=""/></li>
                        <li><img src="../img/order.svg" alt=""/></li>
                    </ul>
                </div>
            </div>
        </div>
    )


}

export default Header