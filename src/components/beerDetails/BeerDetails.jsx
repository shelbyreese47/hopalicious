import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'


function BeerDetails({ setId}) {
    const [beer, setBeer]= useState(null);
    const { id } = useParams();
    const history = useHistory();
    
    

    let url= `https://api.punkapi.com/v2/beers?ids=${id}`;
    console.log(url)
    useEffect(()=>{
        // setId(id);
        
        fetch(url)
        .then(res=>res.json())
        .then(res=>
            {   setId(id);
                setBeer(res[0])
                
            })
        .catch(err=>console.log(err))

    },[url])

    function handleSubmit() {
        // history.push("/random")
        history.goBack();
    
    }
    
    if(!beer){
        return <h2 className="brewingMessage">Brewing...</h2>;
    } else {
    
    let malt = beer.ingredients.malt;
    let hops = beer.ingredients.hops;
    let yeast = beer.ingredients.yeast;
    let mash = beer.method.mash_temp;
    let boil=beer.boil_volume;
    let fermentation = beer.method.fermentation;
    let foodPairing = beer.food_pairing;
    
    return (
        <div className="recipe">
            <div className="titleBD">
                <h2 className="beerName">{beer.name}</h2>
                <h5 className="abvBD">ABV: {beer.abv}</h5>
                <h4 className="tagline">{beer.tagline}</h4>
                <h5 className="ibuBD">IBU: {beer.ibu}</h5>
            </div>
            <p className="beerDescription"><em>{beer.description}</em></p>
            <h4 className="recipeTitle">Recipe</h4>
            <h5 className="ing"><em>Ingredients</em></h5>
            <div className="ingredients">
                <p><strong>Malt</strong></p>
                <ul> 
                    {malt.map((malt)=> 
                    <li>{malt.amount.value} {malt.amount.unit} {malt.name}</li>
                    )}              
                </ul>
                <p><strong>Hops</strong></p>
                <ul> 
                    {hops.map((hops)=> 
                    <li>{hops.amount.value} {hops.amount.unit} {hops.name} to be added at {hops.add} to add {hops.attribute}</li>
                    )}              
                </ul>
                <p><strong>Yeast</strong></p>
                <ul>
                    <li>{yeast}</li>
                </ul>
            </div>
            <h5><em>Directions</em></h5>
            <ul>
                <li>Boil Volume: {boil.value} {boil.unit}</li>
                {mash.map((mash)=>
                <li>Mash at {mash.temp.value} {mash.temp.unit} for {mash.duration} minutes</li>
                )}
                <li>Ferment at {fermentation.temp.value} {fermentation.temp.unit}</li>
            </ul>
            <h5><em>Brewer's tips</em></h5>
                <p>{beer.brewers_tips}</p>
            <h5><em>Food Pairing</em></h5>
            <ul>
                {foodPairing.map((food)=>
                <li>{food}</li>
                )}
            </ul>

            <button className="anotherRandomButton" onClick={handleSubmit}>Go Back</button>
        </div>
    );
}}

export default BeerDetails;