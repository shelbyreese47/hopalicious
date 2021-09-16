import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function BeerDetails({ setId}) {
    const [random, setRandom]= useState([]);
    // const [boil, setBoil]= useState([]);
    
    const { id } = useParams();
    let mash = random.method.mash_temp;
    let boil=random.boil_volume
    let fermentation = random.method.fermentation;
    let malt = random.ingredients.malt;
    let hops = random.ingredients.hops;
    let yeast = random.ingredients.yeast;
    let foodPairing = random.food_pairing;
    // console.log(mash)
    

    let url= `https://api.punkapi.com/v2/beers?ids=${id}`;
    
    useEffect(()=>{
        setId(id);
        
        fetch(url)
        .then(res=>res.json())
        .then(res=>
            {
                setRandom(res[0])
                // setBoil(res[0].boil_volume)
            })
        .catch(err=>console.log(err))

        console.log(random);

        // boilVolume=random[boil_volume]

    },[])

    return (
        <div>
            <h2>{random.name}</h2>
            <h4>{random.tagline}</h4>
            <h5>ABV: {random.abv}</h5>
            <h5>IBU: {random.ibu}</h5>
            <p>{random.description}</p>
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
                <li>Mash at {mash[0].temp.value} {mash[0].temp.unit} for {mash[0].duration} minutes</li>
                <li>Ferment at {fermentation.temp.value} {fermentation.temp.unit}</li>
            </ul>
            <p>Brewer's tips:</p>
                <p>{random.brewers_tips}</p>
            <p>Food Pairing:</p>
            <ul>
                {foodPairing.map((food)=>
                <li>{food}</li>
                )}
            </ul>
            
        </div>
    );
}

export default BeerDetails;