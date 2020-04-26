import React, {Component} from 'react';
import './basket.css';
import {hideBasketGood} from "./actions";
import {connect} from "react-redux";

class Basket extends Component {

    render() {
        return (
            <div className="background-basket">
                <div className="basket">
                    <div className="close" onClick={this.props.hideBasketGood}>
                        <span></span><span></span>
                    </div>
                   <div className="containerBasket">
                       <div className="containerBasketItem">
                           <img src="../img/71epjBy+bNL._SX700_.jpg" alt=""/>
                           <div className="wrap">
                               <div className="name">drgdrgdr</div>
                               <div className="price">123$</div>
                               <div className="size">S</div>
                           </div>
                           <div className="delete-product">
                               delete
                           </div>
                       </div>
                       <div className="containerBasketItem">
                           <img src="../img/81xFNXOeMfL._SX700_.jpg" alt=""/>
                           <div className="wrap">
                               <div className="name">drgdrgdr</div>
                               <div className="price">123$</div>
                               <div className="size">S</div>
                           </div>
                           <div className="delete-product">
                               delete
                           </div>
                       </div>
                       <div className="containerBasketItem">
                           <img src="../img/accessories/hats/7178ssvIqIL._SX700_.jpg" alt=""/>
                           <div className="wrap">
                               <div className="name">drgdrgdr</div>
                               <div className="price">123$</div>
                               <div className="size">S</div>
                           </div>
                           <div className="delete-product">
                               delete
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    hideBasketGood: () => dispatch(hideBasketGood()),
});

export default connect(null, mapDispatchToProps)(Basket);
