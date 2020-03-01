import React from 'react';

export const SidebarLists = ({list}) => {
    return (
        <ul>
            {list.map((item, jIndex) => <li key={jIndex}>{item}</li>)}
        </ul>
    )
};