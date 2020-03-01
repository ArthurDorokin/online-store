import React, {useState} from 'react'

export const SidebarTitle = ({title}) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        /*redundant variable */
        const newActive = !active;
        setActive(newActive)
    };

    return (
        <h5 className={active ? "active" : ""} onClick={toggleActive}>{title}</h5>
    )
};