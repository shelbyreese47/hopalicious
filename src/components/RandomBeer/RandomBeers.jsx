import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import RandomBeer from './RandomBeer'

function RandomBeers({id, setId}) {
    const [click, setClick] = useState([]);
    const [random, setRandom]= useState([]);
    
    // setId(random.id);

    let url='https://api.punkapi.com/v2/beers/random'

    useEffect(()=> {
        fetch(url)
            .then(res=>res.json())
            .then(res=> {
                setRandom(res[0])
                setId(res[0].id)
            })
            .catch(err=>console.log(err))


    }, [click])

    function handleClick(event) {
        setClick([...click,'']);
    }
    // function handleFullButton(event){
    // beerId= random.id  
    // console.log('This is the beer ID',beerId)  
    // setId(beerId);
    
    // }
    return (
        <div className="randomBeer">
            <div >
             <div className="titleBD">
                <h2 className="beerName">{random.name}</h2>
                <h5 className="abvBD">ABV: {random.abv}</h5>
                <h4 className="tagline">{random.tagline}</h4>
                <h5 className="ibuBD">IBU: {random.ibu}</h5>
            </div>
                <p className="beerDescription">{random.description}</p>
                <Link className="fullRecipe" to={"/random/" + id}><strong>Full Recipe</strong></Link>
            </div>
            <div>
                <button className="anotherRandomButton" onClick={handleClick}>Another Random Beer</button>
                
            </div>
            <main>
                
                 
            </main>
        </div>
    );
}

export default RandomBeers;