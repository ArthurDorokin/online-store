import React from 'react';
import './sidebar.css';
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
                        {/*move data to constants (see below)*/}
                        {/*parse data with map methods*/}
                        <li className="list-item">Apparels {/*you really need class names here?*/}
                            <ul className="apparels submenu one">
                                <li>Pants</li>
                                <li>Jumpsuits</li>
                                <li>Shorts</li>
                                <li>Tops</li>
                            </ul>
                        </li>
                        <li className="list-item">Accessories</li>
                        <li className="list-item">Houseware</li>
                        <li className="list-item">Others</li>
                        <li className="list-item">Techniques</li>
                        <li className="list-item">Styles</li>
                    </ul>
                </div>
            </div>
        </div>
);
export default Sidebar


// example data
// const data = [
//     {title: 'Apparels', children: [{title: 'Pants'}, ...]},
//     {title: 'Accessories'},
//     ...
// ]
