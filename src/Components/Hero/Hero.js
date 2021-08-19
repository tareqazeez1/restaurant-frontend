import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.Hero.css';


const Hero = () => {

    const { search, setSearch } = useState('');

    return (
        <section className="hero d-flex align-items-center text-center">
            <div className="container">
                <h1>Order the best dishes from us right now!</h1>

                <div className="search-box col-md-6 my-5 mx-auto">
                    <input id="query" value={search} onChange={(e) => setSearch(e.target.value.trim())} type="text" className="form-control" placeholder="Search Food Item" />
                    <Link to={"/search=" + search}>
                        <button onClick={() => window.scrollBy(0, 500)} className="btn btn-danger search-btn btn-rounded">Search</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;