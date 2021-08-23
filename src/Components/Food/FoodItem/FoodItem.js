import React from 'react';
import { Link } from 'react-router-dom';
import './style.FoodItem.css';

const FoodItem = (props) => {

    const { title, description, price, img } = props.food;

    return (
        <div className="col-md-4 mb-4">
            <div className="card text-center">
                <img src={img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <h4>${price}</h4>
                    <div><button className="btn btn-danger btn-positioned">Order Now</button></div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;