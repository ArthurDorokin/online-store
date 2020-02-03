import React, {Component} from 'react';
import './content.css';
import data from '../constants.js';


class Content extends Component {
    render() {
        const elem = data.content.map((item) => {
            return (
                <div className="product-item" key={item.id}>
                    <div className="img-main-photo">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="product-description">
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                    </div>
                </div>

            );
        });

        return (
            <div className="content">
                <div className="container">
                    <div className="wrapper-product">
                        {elem}
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;

// const elem = data_product.map((item) => {
//     return item;
// });
//
// const Content = () => {
//     return (
//         <div className="content">
//             <div className="container">
//                 <div className="wrapper-product">
//                     <div className="product-item">
//                         <div className="img-main-photo">
//                             <img src="../img/71epjBy+bNL._SX700_.jpg" alt=""/>
//                         </div>
//                         <div className="product-description">
//                             <p>Pueraria Mirifica And Study Phyto Estrogens</p>
//                             <p className="price">$599.00</p>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="img-main-photo">
//                             <img src="../img/81kH6yCcnWL._SX700_.jpg" alt=""/>
//                         </div>
//                         <div className="product-description">
//                             <p>Pueraria Mirifica And Study Phyto Estrogens</p>
//                             <p className="price">$325.00</p>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="img-main-photo">
//                             <img src="../img/81xFNXOeMfL._SX700_.jpg" alt=" "/>
//                         </div>
//                         <div className="product-description">
//                             <p>Pueraria Mirifica And Study Phyto Estrogens</p>
//                             <p className="price">$740.00</p>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="img-main-photo">
//                             <img src="../img/71epjBy+bNL._SX700_.jpg" alt=""/>
//                         </div>
//                         <div className="product-description">
//                             <p>Pueraria Mirifica And Study Phyto Estrogens</p>
//                             <p className="price">$965.00</p>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="img-main-photo">
//                             <img src="../img/81kH6yCcnWL._SX700_.jpg" alt=""/>
//                         </div>
//                         <div className="product-description">
//                             <p>Pueraria Mirifica And Study Phyto Estrogens</p>
//                             <p className="price">$965.00</p>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="img-main-photo">
//                             <img src="../img/81xFNXOeMfL._SX700_.jpg" alt=""/>
//                         </div>
//                         <div className="product-description">
//                             <p>Pueraria Mirifica And Study Phyto Estrogens</p>
//                             <p className="price">$852.00</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//
//
// };
//
// export default Content