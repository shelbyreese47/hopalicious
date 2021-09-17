import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Beer from './Beer';


function Beers({name,ibu,abv,yeast,hops,malt}) {
    
    const [beers, setBeers]= useState([]);
    const history = useHistory();

    let beerName=name ? `&beer_name=${name}` : ""
    let ibuUrl = ibu ? `&ibu_gt=${ibu}` : ""
    let abvUrl = abv ? `&abv_gt=${abv}`: ""
    let yeastUrl= yeast ? `&yeast=${yeast}` : ""
    let hopsUrl = hops ? `&hops=${hops}`: ""
    let maltUrl = malt ? `&malt=${malt}`: ""
       
    let url=`https://api.punkapi.com/v2/beers/?${beerName}${ibuUrl}${abvUrl}${yeastUrl}${hopsUrl}${maltUrl}`
    
    useEffect(()=> {
        fetch(url)
            .then(res=>res.json())
            .then(res=> {
                setBeers(res)                
            })
            .catch(err=>console.log(err))


    }, [url])

    function handleClick(event) {
        history.push("/search")
    }

    return (
        <div>
            <h2>Search Results for:</h2>
            <ul>
               {name ? <li>name: {name}</li> : ""}
               {ibu ? <li>ibu: {ibu}</li> : ""}
                {abv ? <li>abv: {abv}</li> : ""}
                {yeast ? <li>yeast: {yeast}</li> : ""}
                {hops ? <li>hops: {hops}</li>: ""}
                {malt ? <li>malt: {malt}</li>: ""}
            </ul>
            <div>
                {beers.map((beer)=>
                <Beer key={beer.id} id = {beer.id} beer={beer}/>
                )}
            </div>
            <div>
                <button onClick={handleClick}>Back</button>
                
            </div>

        </div>
    );
}

export default Beers;