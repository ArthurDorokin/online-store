import React, {Component} from 'react';
import './sidebar.css';
import {sidebarList, selectSizeSidebar,sidebarListNew} from './constans';
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
                    {Object.entries(sidebarListNew).map(([category, items], index) => (
                        <li key={index} className="list-item">
                            <SidebarTitle title={category}/>
                            <div className="submenu">
                                <SidebarLists list={items}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="selectSize">
                <h5>- SIZES</h5>
                <SelectSize selectSizeSidebar={selectSizeSidebar}/>
            </div>
        </div>
    </div>
);

export default Sidebar
