import React from 'react';
import './mainBanner.css';

// make shorter
const MainBanner = () => {

    return (
        <div className="mainBanner">
             <div className="description">
                 <h1>Pants</h1>
                 <p>Apparels</p>
             </div>
            <div className="mainImg">
                <img src="../img/mainBanner.svg" alt=""/>
            </div>
        </div>
    )
};

export default MainBanner