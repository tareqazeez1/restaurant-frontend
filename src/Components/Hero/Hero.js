import React, { useState } from 'react';
import './style.Hero.css';
import Button from 'react-bootstrap/Button';


const Hero = () => {

    const { search, setSearch } = useState('');

    return (
        <section className="hero-aria">
            <div className="container">
                <div className="row">
                    <div className="col text-center hero-content">
                        <h2>Order your food instantly!</h2>
                        <div className="hero-input">
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value.trim())} placeholder="Search food items" />
                            <Button className="hero-input button" variant="danger">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;