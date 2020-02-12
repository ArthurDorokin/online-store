import React from 'react';
import './sortPanel.css';

// make shorter
const SortPanel = () => {

    return (
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
                        {/*move items to constants and use .map method*/}
                        <option>PRICE</option>
                        <option>PRICE 2</option>
                        <option>PRICE 3</option>
                    </select>
                </div>
            </div>
        </div>
    )


};

export default SortPanel