import React from 'react';

const ContentItem = ({img, description, price}) => (
    <div className="product-item">
        <div className="img-main-photo">
            <img src={img} alt=""/>
        </div>
        <div className="product-description">
            <p>{description}</p>
            <p className="price">{price}</p>
        </div>
    </div>
);

export default ContentItem;