
/**
 * Home 페이지 입니다.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import { Link } from 'react-router-dom';


export const Home = () => (
    <div>
        <Helmet>
            <title>Jest : Home</title>
            <meta name="description" content="home" />
        </Helmet>

        <div className="container">
            <h2>Home</h2>
            <Link to="/counter">to Counter</Link>
        </div>
    </div>
);

export default Home;
