import React, {useState} from 'react'

export const HeaderBurger = () => {
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        const newActive = !active;
        setActive(newActive)
    };
    return (
        <div className={`${"head-mob"} ${active ? "active" : ""}`}>
            <div className="logo">
                <img src="../img/Logo.svg" alt="Logo"/>
            </div>
            <div onClick={toggleActive}
                 className="burger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
};