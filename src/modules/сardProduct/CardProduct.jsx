import React, {Component} from 'react';
import {selectSizeSidebar} from '../sidebar/constans.js';
import './cardProduct.css';
import {hideGood} from "./actions";
import {connect} from "react-redux";
import {CardProductItem} from "./CardProductItem"
import {MainImgCardProd} from "./MainImgCardProd"

class CardProduct extends Component {
    state = {counter: 1};

    increment = () => this.setState({counter: this.state.counter + 1});

    decrement = () => this.setState({counter: Math.max(this.state.counter - 1, 1)});

    onChangeHandle = (event) => this.setState({counter: event.value});

    render() {
        return (
            <div className="background-card">
                <div className={`${"cardProduct"} ${this.state.active ? "open" : ""}`}>
                    <div className="close" onClick={this.props.hideGood}>
                        <span/>
                    </div>
                    <div className="wrap">
                        <MainImgCardProd imgProduct={this.props.product}/>
                        <div className="descriptionCardProd">
                            <div className="headerProd">
                                <CardProductItem infoProduct={this.props.product}/>
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
                                            <input type="text" value={this.state.counter} onChange={this.onChangeHandle}/>
                                            <span onClick={this.increment}>+</span>
                                        </div>
                                        <button>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    hideGood: () => dispatch(hideGood()),
});

export default connect(null, mapDispatchToProps)(CardProduct);
