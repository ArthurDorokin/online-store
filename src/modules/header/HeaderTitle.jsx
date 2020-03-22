import React, {useState} from 'react'

export const HeaderTitle = ({title}) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        const newActive = !active;
        setActive(newActive)
    };
    return (
        <div
            className={`${"name-group"} ${active ? "active" : ""}`}
            onClick={toggleActive}>
            <p>{title}</p>
        </div>
    )
}