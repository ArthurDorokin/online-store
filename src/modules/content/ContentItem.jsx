import React from 'react';

export const ContentItem = ({contentSStore, takeDescript}) => {

    return (
        contentSStore.map((item, index) =>
            <div className="product-item" key={item.id}
                 //onClick={() => {takeDescript(item.description)}}
            >
                <div className="img-main-photo">
                    <img src={item.img} alt=""/>
                </div>
                <div className="product-description">
                    <p>{item.description}</p>
                    <p className="price">{item.price}</p>
                </div>
            </div>
        )
    )
}
