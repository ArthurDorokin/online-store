import React, {Component} from 'react';
import './footer.css';
import data from '../constants.js';


class Footer extends Component {
    render() {
        const elem = data.footer.map((item) => {
            return (
                <li key={item.id}><a href={item.url}>{item.description}</a></li>
            )
        });
        return (
            <div className="footer">
                <div className="container">
                    <div className="block-left">
                        <div className="categories">
                            <ul>
                                <li>Categories</li>
                                <br/>
                                {elem}
                            </ul>
                        </div>
                        <div className="partners">
                            <ul>
                                <li>Partners</li>
                                <br/>
                                /*this*/
                            </ul>
                        </div>
                        <div className="contact">
                            <ul>
                                <li>Contact us</li>
                                <br/>
                                /*this*/
                                <br/>
                                /*this*/
                            </ul>
                        </div>
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
// const Footer = () => {
//
//     return (
//         <div className="footer">
//             <div className="container">
//                 <div className="block-left">
//                     <div className="categories">
//                         <ul>
//                             <li>Categories</li>
//                             <br/>
//                             <li><a href="#!">About us</a></li>
//                             <li><a href="#!">Testimonials</a></li>
//                             <li><a href="#!">Contact</a></li>
//                             <li><a href="#!">Journal</a></li>
//                             <li><a href="#!">Privacy Policy</a></li>
//                         </ul>
//                     </div>
//                     <div className="partners">
//                         <ul>
//                             <li>Partners</li>
//                             <br/>
//                             <li><a href="#!">Support</a></li>
//                             <li><a href="#!">Shipping & Returns</a></li>
//                             <li><a href="#!">Size Guide</a></li>
//                             <li><a href="#!">Product Care</a></li>
//                         </ul>
//                     </div>
//                     <div className="contact">
//                         <ul>
//                             <li>Contact us</li>
//                             <br/>
//                             <li>x26A Pagoda St, TANGS,</li>
//                             <li>xSingapore, 058187</li>
//                             <br/>
//                             <li>+65 6221 5462</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="block-right">
//                     <div className="subscribe">
//                         <ul>
//                             <li>Subscribe to newsletter</li>
//                             <br/>
//                         </ul>
//                         <form action="">
//                             <input type="text" placeholder="Enter your email"/>
//                             <button type="submit">Subscribe</button>
//                         </form>
//                         <div className="icon">
//                             <img src="../img/facebook.svg" alt=""/>
//                             <img src="../img/twitter.svg" alt=""/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="copyright">
//                 <p>© Copyright Matter PTE LTD  2017</p>
//             </div>
//         </div>
//     )
//
//
// };
//
// export default Footer