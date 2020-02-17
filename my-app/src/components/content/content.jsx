import React from 'react';
import './content.css';
import {contentList} from '../constants.js';


const Content = () => {
        const elem = contentList.content.map((item) => {
            return (
                <div className="product-item" key={item.id}>
                    <div className="img-main-photo">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="product-description">
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="content">
                    <div className="wrapper-product">
                        {elem}
                    </div>
                </div>
            </div>
        )
};

export default Content;
