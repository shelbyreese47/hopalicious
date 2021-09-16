import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function BeerDetails({ setId}) {
    const [random, setRandom]= useState([]);
    const [boil, setBoil]= useState([]);
    
    const { id } = useParams();
    let boilVolume;
    

    let url= `https://api.punkapi.com/v2/beers?ids=${id}`;
    
    useEffect(()=>{
        setId(id);
        
        fetch(url)
        .then(res=>res.json())
        .then(res=>
            {
                setRandom(res[0])
                setBoil(res[0].boil_volume)
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
            <p>{boil}</p>
        </div>
    );
}

export default BeerDetails;