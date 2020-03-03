import React, {useCallback, useState} from 'react'

export const SelectSize = ({selectSizeSidebar}) => {
    const [active, setActive] = useState(selectSizeSidebar.sizes[0].id);
    //1/ const toggleCallback = useCallback(
    //   (id) => setActive(id),
    //   [active]
    // );

    return (
        <div className="wrapSelectSize">
            {selectSizeSidebar.sizes.map((item, index) =>
              <div
                key={item.id} /*better use here id*/
                className={`${"size-item"} ${item.id === active ? "active" : ""}`}
                 onClick={() => setActive(item.id)}

                //1/onClick={() => toggleCallback(item.id)}
                >
                  {item.size}
              </div>
            )}
        </div>
    )
};
