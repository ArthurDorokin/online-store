import React from 'react';
import './header.css';
import {headerList, headerControlList} from '../constants.js';

const Header = () => {
    const elem = headerControlList.controlOrder.map((item, index) => {
        return (
            <li key={index}>{item.info}<img src={item.img} alt={item.alt}/></li>
        )
    });
    return (
        <div className="header">
            <div className="strip">
                <p>Free shipping for orders above USD 150</p>
            </div>
            <div className="main-navigation-head">
                <div className="wrap-l-m">
                    <div className="logo">
                        <img src="../img/Logo.svg" alt="Logo"/>
                    </div>
                    <div className="list-menu">
                        {Object.entries(headerList).map(([key, items], index) => (
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
                        {elem}
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Header