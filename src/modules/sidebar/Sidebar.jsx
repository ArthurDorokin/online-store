import React, {Component} from 'react';
import './sidebar.css';
import {connect} from 'react-redux';
import content from "./reducer";
import {selectSizeSidebar} from './constans';
import {SidebarTitle} from './SidebarTitle';
import {SortFilter} from './SortFilter';
import {SidebarLists} from './SidebarLists';
import {SelectSize} from './SelectSize';
import {addGood, removeGood, toggleDisableGood} from "../content/actions";


class Sidebar extends Component {
    render() {
        console.log(this.props.sidebarStore);
        return (
            <div className="sidebar">
                <div className="container">
                    <SortFilter/>
                    <div className="list-section">
                        <ul>
                            {Object.entries(this.props.sidebarStore).map(([category, items], index) => (
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
        )
    }
};

const mapStateToProps = ({sidebarStore}, ownProps) => {
    return {sidebarStore}
}

const mapDispatchToProps = dispatch => {
    return {
        addGood: (data) => dispatch(addGood(data)),
        removeGood: (id) => dispatch(removeGood(id)),
        toggleDisableGood: (id) => dispatch(toggleDisableGood(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
