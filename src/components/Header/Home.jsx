import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="home">
            <div className="hops">
                <img className="hopsImg" src="https://i.imgur.com/FTCHa5u.png" alt="hops"/>
                <h3 className="welcome">Welcome to hopalicious</h3> 
                <img className="hopsImg"  src="https://i.imgur.com/FTCHa5u.png" alt="hops"/>
            </div>
           <h4 className="welcomeMessage">Let's get to brewing!</h4>
            <Link to="/search">
           <button className="recipeButton">Search for a Beer Recipe</button>
           </Link>
           <Link to="/random">
            <button className="randomButton">Get a Random Beer Recipe</button>
           </Link>
           
        </div>
    );
}

export default Home;