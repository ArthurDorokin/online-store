import React from 'react';
import {connect} from 'react-redux';
import ContentItem from "./ContentItem";
import './content.css';
import {logger} from "redux-logger/src";

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

const mapStateToProps = ({contentStore, sortStore, selectSizeStore}, ownProps) => {
  return {
    contentStore: contentStore.filter((good) => good.description.includes(sortStore.search)),
    //contentStore: contentStore.filter((good) => good.size.includes(selectSizeStore.size))
  }
};

export default connect(mapStateToProps)(Content);