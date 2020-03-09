import React from 'react';
import './header.css';
import {headerList, headerControlList} from '../constants.js';
import {HeaderTitle} from './HeaderTitle';
import {HeaderBurger} from './HeaderBurger';


const Header = () => (
    <div className="header">
        <div className="strip">
            <p>Free shipping for orders above USD 150</p>
        </div>
        <HeaderBurger />
        <div className="main-navigation-head">
            <div className="wrap-l-m">
                <div className="logo">
                    <img src="../img/Logo.svg" alt="Logo"/>
                </div>
                <div className="list-menu">
                    {Object.entries(headerList).map(([key, items], index) => (
                        <div key={index} className="my-drop-down-menu">
                            <HeaderTitle title={key}/>
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
                {headerControlList.controlOrder.map((item, index) => <img key={index} src={item.img} alt={item.alt}/>)}
            </div>
        </div>
    </div>
);



export default Header