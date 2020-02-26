import React, {Component} from 'react';
import './sidebar.css';
import {sidebarList} from '../constants.js';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const activeClass = this.state.active ? "active" : "inactive";
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
                                    <h5 className={activeClass} onClick={this.toggleActive}>{key}</h5>
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
}

export default Sidebar
