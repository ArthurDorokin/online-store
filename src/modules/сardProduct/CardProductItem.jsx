import React from 'react';

export const CardProductItem = ({infoProduct}) => (
    <div>
        <h2>{infoProduct.description}</h2>
        <div className="priceProd">
            <div className="price">{infoProduct.price}</div>
            <div className="rating">{console.log(infoProduct)}</div>
        </div>
        <div className="description">
            {infoProduct.descriptionProduct}
        </div>
        <div className="info">
            <div className="howMuchIsLeft">
                <p>How much is left</p>
                <p>57</p>
            </div>
            <div className="cloth">
                <p>Cloth</p>
                <p>Cotton</p>
            </div>
            <div className="madeIn">
                <p>Made in</p>
                <p>Ukraine</p>
            </div>
        </div>
    </div>
);

