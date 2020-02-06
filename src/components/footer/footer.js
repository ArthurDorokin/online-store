import React, {Component} from 'react';
import './footer.css';

// format code
// check on redundant spaces
// you don't use life cycle methods; change component on stateless
class Footer extends Component {

    render() {

        // move to constants
        const footerList = {
            "Categories": ["About us", "Testimonials", "Contact", "Journal", "Privacy Policy"],
            "Partners": ["Support", "Shipping & Returns", "Size Guide", "Product Care"],
            "Contact us": ["x26A Pagoda St, TANGS", "xSingapore, 058187", "+65 6221 5462"]
        };

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
                            <form action="">
                                <input type="text" placeholder="Enter your email"/>
                                <button type="submit">Subscribe</button>
                            </form>
                            <div className="icon">
                                <img src="../img/facebook.svg" alt=""/>
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
    }
}

export default Footer;
