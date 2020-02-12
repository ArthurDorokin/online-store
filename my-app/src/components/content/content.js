import React, {Component} from 'react';
import './content.css';
import data from '../constants.js';

// why class?
// remake into stateless component
class Content extends Component {
    render() {
        // create new from it
        const elem = data.content.map((item) => {
            // make it shorter such in App.tsx
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
            <div className="content">
                {/* first must be container and after content*/}
                <div className="container">
                    <div className="wrapper-product">
                        {elem}
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
