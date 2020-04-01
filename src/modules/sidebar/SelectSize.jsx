import React, {useCallback, useState} from 'react'

export const SelectSize = ({selectSizeSidebar, takeSize}) => {

    const [active, setActive] = useState(selectSizeSidebar.sizes[0].id);

    return (
        <div className="wrapSelectSize">
            {selectSizeSidebar.sizes.map((item, index) =>
                <div
                    key={item.id}
                    className={`${"size-item"} ${item.id === active ? "active" : ""}`}
                    onClick={() => {
                        takeSize(item.sizeSelect);
                        setActive(item.id);
                    }}
                >
                    {item.size}
                </div>
            )}
        </div>
    )
};
