import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.Hero.css';


const Hero = () => {

    const { search, setSearch } = useState('');

    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col text-center hero-content">
                        <h2>Order you favorite food !</h2>
                        <div className="hero-input">
                            <input className="input" type="text" value={search} onChange={(e) => setSearch(e.target.value.trim())} placeholder="Search your food...." />
                            <button className="btn btn-danger">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;