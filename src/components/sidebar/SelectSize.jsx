import React, {useState} from 'react'

export const SelectSize = ({selectSize}) => {
    const [active, setActive] = useState({
        class: "active",
        id: "0"
    });

    const toggleActive = () => {
        const sdf = active.id === 0;
    };
    console.log(active);
    return (
        <div className="wrapSelectSize">
            {selectSize.sizes.map((item, index) => <div  id={item.id} className={`${"size-item"} ${active}`} onClick={toggleActive} key={index}>{item.size}</div>)}
        </div>
    )
};
