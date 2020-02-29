import React, {useState} from 'react'

export const SidebarTitle = ({title}) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        /*redundant variable */
        const newActive = !active;
        setActive(newActive)
    };

    return (                                                    // why did you use additional function?
        <h5 className={active ? "active" : "inactive"} onClick={() => toggleActive()}>{title}</h5>
    )
};