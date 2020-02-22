import React from 'react';
import './sidebar.css';
import {sidebarList} from '../constants.js';

const Sidebar = () => (
    <div className="sidebar">
        <div className="container">
            <div className="sortFilter">
                <div className="filters">
                    <p>FILTERS</p>
                </div>
                <div className="reset">
                    <p>RESET</p>
                </div>
            </div>
            <div className="list-section">
                <ul>
                    {Object.entries(sidebarList).map(([key, items], index) => (
                        <li key={index} className="list-item">
                            <h5>{key}</h5>
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
);
export default Sidebar
