import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
           <h3>Welcome to hopalicious!</h3> 
           <h4>What would you like to do?</h4>
            <Link to="/search">
           <button>Search for a Beer Recipe</button>
           </Link>
           <Link to="/random">
            <button>Get a Random Beer Recipe</button>
           </Link>
           
        </div>
    );
}

export default Home;