import React, {useCallback, useState} from 'react'

export const SelectSize = ({selectSizeSidebar}) => {
    const [active, setActive] = useState(selectSizeSidebar.sizes[0].id);

    return (
        <div className="wrapSelectSize">
            {selectSizeSidebar.sizes.map((item, index) =>
              <div
                key={item.id}
                data-id={item.size}
                className={`${"size-item"} ${item.id === active ? "active" : ""}`}
                onClick={() => setActive(item.id)}
                >
                  {item.size}
              </div>
            )}
        </div>
    )
};
