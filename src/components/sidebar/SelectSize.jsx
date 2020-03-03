import React, {useCallback, useState} from 'react'

export const SelectSize = ({selectSize}) => {
    // const [active, setActive] = useState({
    //     class: "active",/*try to don't use here Object similar values*/
    //     id: "0"
    // });

    /*TODO: default value; later it must changed on more responsive*/
    const [active, setActive] = useState(selectSize.sizes[0].id);

    const toggleActive = () => {
        const sdf = active.id === 0;
    };

    const toggleCallback = useCallback(
      (id) => setActive(id),
      [active]
    );

    console.log(active);
    return (
        <div className="wrapSelectSize">
            {/*better practice break one long line on multiple*/}
            {/*{selectSize.sizes.map((item, index) => <div  id={item.id} className={`${"size-item"} ${active}`} onClick={toggleActive} key={index}>{item.size}</div>)}*/}
            {selectSize.sizes.map((item, index) =>
              <div
                key={index} /*better use here id*/
                id={item.id} /*do you really need here id?*/
                className={`${"size-item"} ${item.id === active ? "active" : ""}`}
                /*first way*/
                // onClick={() => setActive(item.id)}
                /*second way*/
                onClick={() => toggleCallback(item.id)}
                >
                  {item.size}
              </div>
            )}
        </div>
    )
};
