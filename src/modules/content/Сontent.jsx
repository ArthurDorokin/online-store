import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContentItem from "./ContentItem";
import './content.css';
import content from "./reducer";
import { addGood, removeGood, toggleDisableGood } from './actions'

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

const mapStateToProps = ({contentStore}, ownProps) => {
  return {contentStore}
}

const mapDispatchToProps = dispatch => {
  return {
    addGood: (data) => dispatch(addGood(data)),
    removeGood: (id) => dispatch(removeGood(id)),
    toggleDisableGood: (id) => dispatch(toggleDisableGood(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);