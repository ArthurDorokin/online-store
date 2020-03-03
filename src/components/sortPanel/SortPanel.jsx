import React from 'react';
import './sortPanel.css';
import {sortSelectList} from "../constants.js";

const SortPanel = () => (
    <div className="sortPanel">
        <div className="container">
            <div className="breadcrumbs">
                <ul>
                    <li><a href="#!">Women</a><span className="separator">></span></li>
                    <li><a href="#!">Pants</a></li>
                </ul>
            </div>
            <div className="sort">
                <div className="search">
                    <input className="search-input" type="text" placeholder="Search..."/>
                </div>
                {Object.entries(sortSelectList).map(([key, items], index) => (
                    <div key={index} className="block-item">
                        <h5>{key}</h5>
                        <select className="select">
                            {items.map((item, jIndex) => <option key={jIndex}>{item}</option>)}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default SortPanel