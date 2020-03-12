import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContentItem from "./ContentItem";
import './content.css';
import {contentList} from '../constants.js';

class Content extends Component {
    render() {
        console.log(this.props.testStore);
        return (
            <div className="container">
                <div className="content">
                    <div className="wrapper-product">
                        {contentList.content.map((item) => <ContentItem key={item.id} {...item}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(Content);