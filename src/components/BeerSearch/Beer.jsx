import React from 'react';
import { Link } from 'react-router-dom'

function Beer({beer, id}) {


    return (
        <div>
            <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <h5>ABV: {beer.abv}</h5>
                <p>{beer.description}</p>
              
                <Link to={"/random/" + id}>Full Recipe</Link>
        </div>
    );
}

export default Beer;