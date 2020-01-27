import React from 'react';
import './content.css';

let data_product = [
        {
            img: '../img/71epjBy+bNL._SX700_.jpg',
            description: 'Pueraria Mirifica And Study Phyto Estrogens',
            price: '$599.00',
            id: 1
        },
        {
            img: '../img/81kH6yCcnWL._SX700_.jpg',
            description: 'Pueraria Mirifica And Study Phyto Estrogens',
            price: '$325.00',
            id: 2
        },
        {
            img: '../img/81xFNXOeMfL._SX700_.jpg',
            description: 'Pueraria Mirifica And Study Phyto Estrogens',
            price: '$740.00',
            id: 3
        },
        {
            img: '../img/71epjBy+bNL._SX700_.jpg',
            description: 'Pueraria Mirifica And Study Phyto Estrogens',
            price: '$965.00',
            id: 4
        },
        {
            img: '../img/81kH6yCcnWL._SX700_.jpg',
            description: 'Pueraria Mirifica And Study Phyto Estrogens',
            price: '$965.00',
            id: 5
        },
        {
            img: '../img/81xFNXOeMfL._SX700_.jpg',
            description: 'Pueraria Mirifica And Study Phyto Estrogens',
            price: '$852.00',
            id: 6
        },
    ];

const elem = data_product.map((item) => {
    return console.log(item);
});

const Content = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="wrapper-product">
                    <div className="product-item">
                        <div className="img-main-photo">
                            <img src="../img/71epjBy+bNL._SX700_.jpg" alt=""/>
                        </div>
                        <div className="product-description">
                            <p>Pueraria Mirifica And Study Phyto Estrogens</p>
                            <p className="price">$599.00</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="img-main-photo">
                            <img src="../img/81kH6yCcnWL._SX700_.jpg" alt=""/>
                        </div>
                        <div className="product-description">
                            <p>Pueraria Mirifica And Study Phyto Estrogens</p>
                            <p className="price">$325.00</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="img-main-photo">
                            <img src="../img/81xFNXOeMfL._SX700_.jpg" alt=""/>
                        </div>
                        <div className="product-description">
                            <p>Pueraria Mirifica And Study Phyto Estrogens</p>
                            <p className="price">$740.00</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="img-main-photo">
                            <img src="../img/71epjBy+bNL._SX700_.jpg" alt=""/>
                        </div>
                        <div className="product-description">
                            <p>Pueraria Mirifica And Study Phyto Estrogens</p>
                            <p className="price">$965.00</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="img-main-photo">
                            <img src="../img/81kH6yCcnWL._SX700_.jpg" alt=""/>
                        </div>
                        <div className="product-description">
                            <p>Pueraria Mirifica And Study Phyto Estrogens</p>
                            <p className="price">$965.00</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="img-main-photo">
                            <img src="../img/81xFNXOeMfL._SX700_.jpg" alt=""/>
                        </div>
                        <div className="product-description">
                            <p>Pueraria Mirifica And Study Phyto Estrogens</p>
                            <p className="price">$852.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};

export default Content