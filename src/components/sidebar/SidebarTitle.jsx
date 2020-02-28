import React, {useState} from 'react'

export const SidebarTitle = ({title}) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        const newActive = !active;
        setActive(newActive)
    };

    return (
        <h5 className={active ? "active" : "inactive"} onClick={() => toggleActive()}>{title}</h5>
    )
};