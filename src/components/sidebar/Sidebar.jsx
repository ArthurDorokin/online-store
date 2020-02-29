import React, {Component} from 'react';
import './sidebar.css';
import {sidebarList} from '../constants.js';
import {SidebarTitle} from './SidebarTitle';

const Sidebar = () => {// need to simply
    return (
        <div className="sidebar">
            <div className="container">
                <div className="sortFilter">
                    <div>FILTERS</div>
                    <div>RESET</div>
                </div>
                <div className="list-section">
                    <ul>
                        {Object.entries(sidebarList).map(([key, items], index) => (
                            <li key={index} className="list-item">
                                <SidebarTitle title={key}/>
                                <div className="submenu">
                                    <ul>
                                        {items.map((item, jIndex) => <li key={jIndex}>{item}</li>)}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
