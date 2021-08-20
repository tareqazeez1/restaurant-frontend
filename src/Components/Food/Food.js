import React from 'react';
import { useState, useEffect } from 'react';
import fakeData from '../FakeData/fakeData';
import './style.Food.css';
import FoodItem from './FoodItem/FoodItem';

const Food = () => {

    // To get the Fake Data

    const data = fakeData;

    // To set all Foods

    const [foods, setFoods] = useState([]);

    // To set foods category wise
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');

    useEffect(() => {
        setFoods(data)
    }, [])


    // initials set data 
    // const [items, setItems] = useState([])

    const selectedFoods = foods.filter(food => food.categories === selectedCategory)

    return (
        <section className="food-area my-5">
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedCategory("Indian")} className="nav-item">
                            <span to="breakfast" className={selectedCategory === "Indian" ? "active nav-link" : "nav-link"}>Indian</span>
                        </li>
                        <li onClick={() => setSelectedCategory("Italian")} className="nav-item">
                            <span to="breakfast" className={selectedCategory === "Italian" ? "active nav-link" : "nav-link"}>Italian</span>
                        </li>
                        <li onClick={() => setSelectedCategory("Chinese")} className="nav-item">
                            <span to="breakfast" className={selectedCategory === "Chinese" ? "active nav-link" : "nav-link"}>Chinese</span>
                        </li>
                    </ul>
                </nav>

                {/* <div className="row my-5">

                    <Loading visibility={loadingVisibility} />
                    {
                        selectedFoods.map(food => <FoodItem key={food.id} food={food} />)
                    }

                </div> */}


                <div className="row my-5">


                    {
                        selectedFoods.map(food => <FoodItem foods={foods} />)
                    }

                </div>


                <div className="text-center">
                    <button disabled className="btn btn-secondary">Check Out Your Food</button>

                    {/* {
                        props.cart.length ?
                            <Link to="/checkout">
                                <button className="btn btn-danger btn-secondary">Check Out Your Food</button>
                            </Link>
                            :
                            <button disabled className="btn btn-secondary">Check Out Your Food</button>

                    } */}

                </div>
            </div>
        </section>
    );
};

export default Food;