import React from 'react';

export const SidebarLists = ({list}) => {
    return (
        <ul>
            {Object.entries(list).map(([keys,jIndex]) => <li key={jIndex}>{keys}</li>)}
        </ul>
    )
};