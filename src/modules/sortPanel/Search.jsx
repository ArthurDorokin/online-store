import React, {Component} from 'react';
import {connect} from "react-redux";
import {setSearch} from "./actions";


class Search extends Component {
    onUpdateSearch = (event) => {
        this.props.setSearch(event.target.value)
    };

    render() {
        return (
            <div className="search">
                <input
                    className="search-input"
                    onChange={this.onUpdateSearch}
                    type="text" placeholder="Search..."
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setSearch: (search) => dispatch(setSearch(search)),
});

export default connect(null, mapDispatchToProps)(Search);
