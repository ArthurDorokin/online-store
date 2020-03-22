import React, {useState} from 'react'

export const SidebarLists = ({list}) => {
    const [active, setActive] = useState(list.id);
    const toggleActive = () => {
        const newActive = !active;
        setActive(newActive)
    };

    return (
        <ul>
            {Object.entries(list).map(([subCategory, items], index) => (
                <li key={index}
                    className={`${"sub-item"} ${items.id === active ? "active" : ""}`}
                    onClick={() => setActive(items.id)}
                >
                    {subCategory}
                    <ul className="categoryKinds">
                        {items.kinds.map((item) => <li key={item.id}>{item.name}</li>)}
                    </ul>
                </li>
            ))}
        </ul>
    )
};