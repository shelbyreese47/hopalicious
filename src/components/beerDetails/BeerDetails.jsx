import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

function BeerDetails({ setId}) {
    const [beer, setBeer]= useState(null);
    const { id } = useParams();
    const history = useHistory();
    
    

    let url= `https://api.punkapi.com/v2/beers?ids=${id}`;
    console.log(url)
    useEffect(()=>{
        setId(id);
        
        fetch(url)
        .then(res=>res.json())
        .then(res=>
            {
                setBeer(res[0])
                
            })
        .catch(err=>console.log(err))

    },[url])

    function handleSubmit() {
        history.push("/random")
    }
    
    if(!beer){
        return <h2>Brewing...</h2>;
    } else {
    
    let malt = beer.ingredients.malt;
    let hops = beer.ingredients.hops;
    let yeast = beer.ingredients.yeast;
    let mash = beer.method.mash_temp;
    let boil=beer.boil_volume;
    let fermentation = beer.method.fermentation;
    let foodPairing = beer.food_pairing;
    
    return (
        <div>
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <h5>ABV: {beer.abv}</h5>
            <h5>IBU: {beer.ibu}</h5>
            <p>{beer.description}</p>
            <h4>Recipe</h4>
            <h5>Ingredients</h5>
            <p>Malt</p>
            <ul> 
                {malt.map((malt)=> 
                <li>{malt.amount.value} {malt.amount.unit} {malt.name}</li>
                )}              
            </ul>
            <p>Hops</p>
            <ul> 
                {hops.map((hops)=> 
                <li>{hops.amount.value} {hops.amount.unit} {hops.name} to be added at {hops.add} to add {hops.attribute}</li>
                )}              
            </ul>
            <p>Yeast</p>
            <ul>
                <li>{yeast}</li>
            </ul>
            <h5>Directions:</h5>
            <ul>
                <li>Boil Volume: {boil.value} {boil.unit}</li>
                {mash.map((mash)=>
                <li>Mash at {mash.temp.value} {mash.temp.unit} for {mash.duration} minutes</li>
                )}
                <li>Ferment at {fermentation.temp.value} {fermentation.temp.unit}</li>
            </ul>
            <p>Brewer's tips:</p>
                <p>{beer.brewers_tips}</p>
            <p>Food Pairing:</p>
            <ul>
                {foodPairing.map((food)=>
                <li>{food}</li>
                )}
            </ul>

            <button onClick={handleSubmit}>Another Random Beer</button>
        </div>
    );
}}

export default BeerDetails;