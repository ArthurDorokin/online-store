import React from 'react';
import {connect} from 'react-redux';
import ContentItem from "./ContentItem";
import './content.css';
import {addGood, filterGood, removeGood, toggleDisableGood} from './actions'
import sortStore from "../sortPanel/reducer";

const Content = (props) => (
  <div className="container">
    <div className="content">
      <div className="wrapper-product">
        {props.contentStore.map((item) =>
          <ContentItem key={item.id} {...item}/>
        )};
      </div>
    </div>
  </div>
);

const mapStateToProps = ({contentStore, sortStore}, ownProps) => {
  return {
    contentStore: contentStore.filter((good) => good.description.includes(sortStore.search))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGood: (data) => dispatch(addGood(data)),
    removeGood: (id) => dispatch(removeGood(id)),
    toggleDisableGood: (id) => dispatch(toggleDisableGood(id)),
    filterGood: (size) => dispatch(filterGood(size))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);