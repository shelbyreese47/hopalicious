import React from 'react';
import { Link } from 'react-router-dom'

function Beer({beer, id}) {


    return (
        <div  className="randomBeer">
            <div className="titleBD">
                <h2 className="beerName">{beer.name}</h2>
                <h5 className="abvBD">ABV: {beer.abv}</h5>
                <h4 className="tagline">{beer.tagline}</h4>
                <h5 className="ibuBD">IBU: {beer.ibu}</h5>
            </div>
                <p className="beerDescription"><em>{beer.description}</em></p>
              
                <Link className="fullRecipe" to={"/search/beers/" + id}><strong>Full Recipe</strong></Link>
        </div>
    );
}

export default Beer;