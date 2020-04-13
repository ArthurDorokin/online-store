import React from 'react';
import {connect} from 'react-redux';
import {ContentItem} from "./ContentItem";
import './content.css';
import {logger} from "redux-logger/src";
import {setDescription} from "./actions";


const Content = (props) => (
  <div className="container">
    <div className="content">
      <div className="wrapper-product">
        {/*{props.contentStore.map((item) =>*/}
        {/*  <ContentItem key={item.id} {...item}/>*/}
        {/*  takeDescript={this.props.setDescription}*/}
        {/*)};*/}
          <ContentItem contentSStore={props.contentStore}/>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({contentStore, sortStore, selectSizeStore, selectProduct}, ownProps) => {
    console.log(selectSizeStore);
    console.log(selectProduct);
    return {
    contentStore: contentStore.filter((good) => good.description.includes(sortStore.search)),
    //contentStore: contentStore.filter((good) => good.size.includes(selectSizeStore.size))
  }
};

const mapDispatchToProps = dispatch => ({
    setDescription: (description) => dispatch(setDescription(description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);