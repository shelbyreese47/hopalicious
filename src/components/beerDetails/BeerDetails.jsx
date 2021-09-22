import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'


function BeerDetails({ setId, shoppingList, setShoppingList, handleUpdate}) {
    const [beer, setBeer]= useState(null);
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState(null);

    let url= `https://api.punkapi.com/v2/beers?ids=${id}`;

    useEffect(()=>{
       fetch(url)
        .then(res=>res.json())
        .then(res=>
            {   setId(id);
                setBeer(res[0])
                
            })
        .catch(err=> {
            const copy = String(err)
            setError(copy)
        })  
        //eslint-disable-next-line
    },[])

    function handleSubmit() {
        history.goBack();
    }

    function handleOnclick(item) {
        handleUpdate(item);
    }
    
    if(!beer){
        if (error){
            
            return <h2 className="brewingMessage">{error}</h2>;
        }
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
            <p className="addToList"><em>Click on an ingredient to add to shopping list</em></p>
            <div className="ingredients">
                <p><strong>Malt</strong></p>
                <ul> 
                    {malt.map((malt)=> 
                    <li><button className="addButton" key={`${malt.amount.value} ${malt.amount.unit} ${malt.name}`} onClick={()=>handleOnclick(`${malt.amount.value} ${malt.amount.unit} ${malt.name}`)}>{malt.amount.value} {malt.amount.unit} {malt.name}</button></li>
                    )}              
                </ul>
                <p><strong>Hops</strong></p>
                <ul> 
                    {hops.map((hops)=> 
                    <li><button key={`${hops.amount.value}-${hops.name}`} className="addButton" onClick={()=>handleOnclick(`${hops.amount.value} ${hops.amount.unit} ${hops.name} `)}>{hops.amount.value} {hops.amount.unit} {hops.name} to be added at {hops.add} to add {hops.attribute}</button></li>
                    )}              
                </ul>
                <p><strong>Yeast</strong></p>
                <ul>
                    <li><button className="addButton" onClick={()=>handleOnclick(`${yeast}`)}>{yeast}</button></li>
                </ul>
            </div>
            <h5><em>Directions</em></h5>
            <ul>
                <li>Boil Volume: {boil.value} {boil.unit}</li>
                {mash.map((mash)=>
                <li key={`${mash.temp.value} ${mash.temp.unit}`}>Mash at {mash.temp.value} {mash.temp.unit} for {mash.duration} minutes</li>
                )}
                <li>Ferment at {fermentation.temp.value} {fermentation.temp.unit}</li>
            </ul>
            <h5><em>Brewer's tips</em></h5>
                <p>{beer.brewers_tips}</p>
            <h5><em>Food Pairing</em></h5>
            <ul>
                {foodPairing.map((food, index)=>
                <li key={`${food} - ${index}`}>{food}</li>
                )}
            </ul>

            <button className="anotherRandomButton" onClick={handleSubmit}>Go Back</button>
        </div>
    );
}}

export default BeerDetails;