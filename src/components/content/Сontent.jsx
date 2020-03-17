import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContentItem from "./ContentItem";
import './content.css';

class Content extends Component {
    render() {
        console.log(this.props.contentStore);
        return (
            <div className="container">
                <div className="content">
                    <div className="wrapper-product">
                        {this.props.contentStore.content.map((item) =>
                            <ContentItem key={item.id} {...item}/>
                        )};
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        contentStore: state
    }),
    dispatch => ({})
)(Content);