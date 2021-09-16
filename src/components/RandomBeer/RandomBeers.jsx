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
        <div>
            <div>
                <h2>{random.name}</h2>
                <h4>{random.tagline}</h4>
                <h5>ABV: {random.abv}</h5>
                <p>{random.description}</p>
                {/* <Link to={"/" + id}>Full Recipe</Link> */}
                <Link to={"/random/" + id}>Full Recipe</Link>
            </div>
            <div>
                <button onClick={handleClick}>Random Beer</button>
                
            </div>
            <main>
                
                 
            </main>
        </div>
    );
}

export default RandomBeers;