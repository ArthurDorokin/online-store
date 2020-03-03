import React, {Component} from 'react';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        //this.setState({term: term});
        //this.props.onUpdateSearch(term);
        console.log(term);
    }

    render () {
        return (
            <div className="search">
                <input className="search-input"
                       onChange={this.onUpdateSearch}
                       type="text" placeholder="Search..."
                />
            </div>
        )
    }
}
