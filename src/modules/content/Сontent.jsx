import React from 'react';
import {connect} from 'react-redux';
import ContentItem from "./ContentItem";
import './content.css';

const Content = ({contentStore}) => (
  <div className="container">
    <div className="content">
      <div className="wrapper-product">
        {contentStore.map((good) => <ContentItem key={good.id} good={good} />)}
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