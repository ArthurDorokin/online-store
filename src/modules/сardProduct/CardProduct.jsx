import React, {Component} from 'react';
import {selectSizeSidebar} from '../sidebar/constans.js';
import './cardProduct.css';
import {hideGood} from "./actions";
import {connect} from "react-redux";

class CardProduct extends Component {
  state = {counter: 1};

  increment = () => this.setState({counter: this.state.counter + 1});

  decrement = () => this.setState({counter: Math.max(this.state.counter - 1, 1)});

  onChangeHandle = (event) => this.setState({counter: event.value});

  render() {
    return (
      <div className={`${"cardProduct"} ${this.state.active ? "open" : ""}`}>
        <div className="close" onClick={this.props.hideGood}>
          <span/>
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
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  hideGood: () => dispatch(hideGood()),
});

export default connect(null, mapDispatchToProps)(CardProduct);
