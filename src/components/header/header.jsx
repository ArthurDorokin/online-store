import React from 'react';
import './header.css';
import {headerList} from '../constants.js';

const Header = () => { // can be shorter
    return (
        <div className="header">
            <div className="strip">
                <p>Free shipping for orders above USD 150</p>
            </div>
            <div className="main-navigation-head">
                <div className="wrap-l-m">
                    <div className="logo">
                        <img src="../img/Logo.svg" alt=""/> {/*empty alt*/}
                    </div>
                    <div className="list-menu">
                        {Object.entries(headerList).map(([key, items], index) => (
                            /*empty line???*/
                            <div key={index} className="my-drop-down-menu">
                                <div className="name-group"><p>{key}</p></div>
                                <div className="drop-down-child">
                                    <ul className="child">
                                        {items.map((item, jIndex) => <li key={jIndex}><a href="#">{item}</a></li>)}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="control-order">
                    <ul>
                        {/*move it data to constants and use .map*/}
                        <li>WELCOME, ALEX<img src="../img/Rectangle.svg" alt=""/></li>{/*empty alt*/}
                        <li><img src="../img/search.svg" alt=""/></li>
                        <li><img src="../img/Heart.svg" alt=""/></li>
                        <li><img src="../img/order.svg" alt=""/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header