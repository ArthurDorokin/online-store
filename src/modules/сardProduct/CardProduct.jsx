import React, {Component} from 'react';
import {selectSizeSidebar} from '../sidebar/constans.js';
import './cardProduct.css';

export default class CardProduct extends Component {
    state = {
        counter: 1,
        active: false
    };

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    decrement = () => {
        this.setState({
            counter: Math.max(this.state.counter - 1, 1)
        })
    };

    openCart = () => {
        const open = this.state.active;
        this.setState({
            active: !open
        })
    };

    render() {
        return (
            <div className={`${"cardProduct"} ${this.state.active ? "open" : ""}`}>
                <div className="close"
                     onClick={this.openCart}>
                    <span></span>
                </div>
                <div className="wrap">
                    <div className="mainImgCardProd">
                        <img src="/img/71epjBy+bNL._SX700_.jpg" alt=""/>
                    </div>
                    <div className="descriptionCardProd">
                        <div className="headerProd">
                            <h2>The Sideswept Dhoti + Bottom Line Grey (Silk)</h2>
                            <div className="priceProd">
                                <div className="price">$599.00</div>
                                <div className="rating">*****</div>
                            </div>
                            <div className="description">
                                Inspired by the continuous length of the lunghi or sarong seen in hot climates
                                everywhere from
                                South Asia to the Horn of Africa and southern Arabian pen
                            </div>
                            <div className="info">
                                <div className="howMuchIsLeft">
                                    <p>How much is left</p>
                                    <p>57</p>
                                </div>
                                <div className="cloth">
                                    <p>Cloth</p>
                                    <p>Cotton</p>
                                </div>
                                <div className="madeIn">
                                    <p>Made in</p>
                                    <p>Ukraine</p>
                                </div>
                            </div>
                            <div className="selectSize">
                                <h5>SIZES</h5>
                                <div className="wrapSelectSize">
                                    {selectSizeSidebar.sizes.map((item, index) =>
                                        <div
                                            key={item.id}
                                            className="size-item">
                                            {item.size}
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="quantity">
                                <h5>QUANTITY</h5>
                                <div className="wrapQuantity">
                                    <div className="quan">
                                        <span onClick={this.decrement}>-</span>
                                        <input type="text" value={this.state.counter}/>
                                        <span onClick={this.increment}>+</span>
                                    </div>
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
