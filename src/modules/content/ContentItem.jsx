import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {showGood} from "../сardProduct/actions";

const ContentItem = ({good, showGood}) => (

    <div
        className="product-item"
        onClick={() => showGood(good)}
    >
        <div className="img-main-photo">
            <img src={good.img} alt={good.img}/>
        </div>
        <div className="product-description">
            <p>{good.description}</p>
            <p className="price">{good.price}</p>
        </div>
    </div>
);

ContentItem.propTypes = {
    good: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        price: PropTypes.string,
        description: PropTypes.string,
        size: PropTypes.string,
        attrID: PropTypes.arrayOf(PropTypes.number),
    }),
    showGood: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    showGood: (good) => dispatch(showGood(good)),
});

export default connect(null, mapDispatchToProps)(ContentItem);