import React, {Component} from 'react';
import './sidebar.css';
import {connect} from 'react-redux';
import content from "./reducer";
import {selectSizeSidebar, sidebarListNew} from './constans';
import {SidebarTitle} from './SidebarTitle';
import {SortFilter} from './SortFilter';
import {SidebarLists} from './SidebarLists';
import {SelectSize} from './SelectSize';
import {filterGood} from "../content/actions";

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
                        <SelectSize selectSizeSidebar={this.props.selectSizeStore} takeSize={this.props.filterGood}/>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = ({selectSizeStore}, ownProps) => {
    return {selectSizeStore}
}

const mapDispatchToProps = dispatch => {
    return {
        filterGood: (size) => dispatch(filterGood(size))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
