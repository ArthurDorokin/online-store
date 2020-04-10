import React, {Component} from 'react';
import {connect} from "react-redux";
import {setSize} from "./actions";
import './sidebar.css';
import {selectSizeSidebar, sidebarListNew} from './constans';
import {SidebarTitle} from './SidebarTitle';
import {SortFilter} from './SortFilter';
import {SidebarLists} from './SidebarLists';
import {SelectSize} from './SelectSize';

class Sidebar extends Component {
    render() {
        return (
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
                        <SelectSize selectSizeSidebar={selectSizeSidebar} takeSize={this.props.setSize}/>
                    </div>
                </div>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => ({
    setSize: (size) => dispatch(setSize(size)),
});

export default connect(null, mapDispatchToProps)(Sidebar);
