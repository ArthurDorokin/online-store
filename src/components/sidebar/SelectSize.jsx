import React, {Component} from 'react'

export const SelectSize = ({selectSize}) => {
    return (
        <div className="wrapSelectSize">
            {selectSize.sizes.map((item, index) => <div className="size-item" key={item.id}>{item.size}</div>)}
        </div>
    )
};
