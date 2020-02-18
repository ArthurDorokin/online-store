import React from 'react';
import './sortPanel.css';

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
                    <p>Sort by</p>
                    <select className="select">
                        <option>PRICE</option>
                        <option>PRICE 2</option>
                        <option>PRICE 3</option>
                    </select>
                </div>
            </div>
        </div>
    )

export default SortPanel