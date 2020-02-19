import React from 'react';
import './footer.css';
import {footerList} from '../constants.js';

const Footer = () => { // can be shorter
        return (
            <div className="footer">
                <div className="container">
                    <div className="block-left">
                        {Object.entries(footerList).map(([key, items], index) => (
                            <div key={index} className="block-item">
                                <h3>{key}</h3>
                                <ul>
                                    {items.map((item, jIndex) => <li key={jIndex}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="block-right">
                        <div className="subscribe">
                            <ul>
                                <li>Subscribe to newsletter</li>
                                <br/>
                            </ul>
                            <form action=""> {/* do you need an action here? */}
                                <input type="text" placeholder="Enter your email"/>
                                <button type="submit">Subscribe</button>
                            </form>
                            <div className="icon">
                                <img src="../img/facebook.svg" alt=""/> {/*empty alt*/}
                                <img src="../img/twitter.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© Copyright Matter PTE LTD 2017</p>
                </div>
            </div>
        );
};

export default Footer;
