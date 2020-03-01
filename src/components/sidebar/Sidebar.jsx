import React, {Component} from 'react';
import './sidebar.css';
import {sidebarList, selectSize} from '../constants.js';
import {SidebarTitle} from './SidebarTitle';
import {SortFilter} from './SortFilter';
import {SidebarLists} from './SidebarLists';
import {SelectSize} from './SelectSize';

const Sidebar = () => (
    <div className="sidebar">
        <div className="container">
            <SortFilter/>
            <div className="list-section">
                <ul>
                    {Object.entries(sidebarList).map(([key, items], index) => (
                        <li key={index} className="list-item">
                            <SidebarTitle title={key}/>
                            <div className="submenu">
                                <SidebarLists list={items}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="selectSize">
                <h5>- SIZES</h5>
                <div className="wrapSelectSize">
                    <div className="size-item">1</div>
                    <div className="size-item">2</div>
                    <div className="size-item">3</div>
                    <div className="size-item">4</div>
                </div>
            </div>
        </div>
    </div>
);

export default Sidebar
