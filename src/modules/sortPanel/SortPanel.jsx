import React, {Component} from 'react';
import './sortPanel.css';
import {sortSelectList} from "../constants.js";
import Search from "./Search";
import {setSortName} from "./actions";
import {connect} from "react-redux";

class SortPanel extends Component {
    handleChange = (event) => {
        this.props.setSortName(event.target.value);
        console.log(this.props.setSortName(event.target.value))
    };

    render() {
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
                        <Search/>
                            <div className="block-item">
                                <h5>Sort by</h5>
                                <select className="select" onChange={this.handleChange}>
                                    {sortSelectList.sortBy.map((item) =>
                                        <option key={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    setSortName: (name) => dispatch(setSortName(name)),
});

export default connect(null, mapDispatchToProps)(SortPanel);