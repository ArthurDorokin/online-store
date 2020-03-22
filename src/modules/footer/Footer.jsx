import React from 'react';
import './footer.css';
import {footerList} from '../constants.js';

const Footer = () => (
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
                    <form>
                        <input type="text" placeholder="Enter your email"/>
                        <button type="submit" className="outline">Subscribe</button>
                    </form>
                    <div className="icon">
                        <img src="../img/facebook.svg" alt="facebook"/>
                        <img src="../img/twitter.svg" alt="twitter"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>© Copyright Matter PTE LTD 2017</p>
        </div>
    </div>
);

export default Footer;
