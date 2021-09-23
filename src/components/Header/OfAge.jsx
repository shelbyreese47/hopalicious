import React from 'react';
import { Link } from 'react-router-dom'

function OfAge(props) {
    return (
        <div className="home">
            <div className="hops">
                <img className="hopsImg" src="https://i.imgur.com/FTCHa5u.png" alt="hops"/>
                <h3 className="welcome">Welcome to hopalicious</h3> 
                <img className="hopsImg"  src="https://i.imgur.com/FTCHa5u.png" alt="hops"/>
            </div>
           <h4 className="welcomeMessage">First, confirm your age:</h4>
            <Link to="/home">
           <button className="recipeButton">I am 21+</button>
           </Link>
           <Link to="/error">
            <button className="randomButton">I am under 21</button>
           </Link>
           
        </div>
    );
}

export default OfAge;