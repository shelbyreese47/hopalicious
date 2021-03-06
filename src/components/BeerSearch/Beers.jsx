import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Beer from './Beer';


function Beers({name,ibu,abv,yeast,hops,malt}) {
    
    const [beers, setBeers]= useState([]);
    const history = useHistory();
    const [error, setError] = useState(null);


    let beerName=name ? `&beer_name=${name}` : ""
    let ibuUrl = ibu ? `&ibu_gt=${ibu}` : ""
    let max= parseInt(ibu) +9;
    let ibuMax = ibu ? `&ibu_lt=${max}` : ""
    let abvUrl = abv ? `&abv_gt=${abv}`: ""
    let yeastUrl= yeast ? `&yeast=${yeast}` : ""
    let hopsUrl = hops ? `&hops=${hops}`: ""
    let maltUrl = malt ? `&malt=${malt}`: ""
       
    let url=`https://api.punkapi.com/v2/beers/?${beerName}${ibuUrl}${ibuMax}${abvUrl}${yeastUrl}${hopsUrl}${maltUrl}`
    
    useEffect(()=> {
        fetch(url)
            .then(res=>res.json())
            .then(res=> {
                setBeers(res)                
            })
            .catch(err=> {
            const copy = String(err)
            setError(copy)
        })  
        //eslint-disable-next-line
    }, [url])
   
    function handleClick(event) {
        history.push("/search")
    }

    if (error){
            
            return <h2 className="brewingMessage">{error}</h2>;
        }
    return (
        <div className="searchResultsContainer">
            <h2>Search Results for:</h2>
            <ul className="searchItems">
               {name ? <li className="searchItem">name: {name}</li> : ""}
               {ibu ? <li className="searchItem">ibu: {ibu}- {max}</li> : ""}
                {abv ? <li className="searchItem">abv: {abv}</li> : ""}
                {yeast ? <li className="searchItem">yeast: {yeast}</li> : ""}
                {hops ? <li className="searchItem">hops: {hops}</li>: ""}
                {malt ? <li className="searchItem">malt: {malt}</li>: ""}
            </ul>
            <div>
                {beers.map((beer)=>
                <Beer key={beer.id} id = {beer.id} beer={beer}/>
                )}
            </div>
            <div>
                <button className="anotherRandomButton" onClick={handleClick}>Back to Search</button>
                
            </div>

        </div>
    );
}

export default Beers;