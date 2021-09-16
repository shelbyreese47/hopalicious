import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RandomBeers(props) {
    const [click, setClick] = useState([]);
    const [random, setRandom]= useState([]);
    const [id, setId]= useState();
    let url='https://api.punkapi.com/v2/beers/random'
    useEffect(()=> {
        fetch(url)
            .then(res=>res.json())
            .then(res=> setRandom(res[0]))
            .catch(err=>console.log(err))


    }, [click])
    
    function handleClick(event) {
        setClick([...click,'']);
    }
    // setId(random.id);
    // console.log(id);
    // console.log(random);
    return (
        <div>
            <div>
                <h2>{random.name}</h2>
                <h4>{random.tagline}</h4>
                <h5>ABV: {random.abv}</h5>
                <p>{random.description}</p>
                <Link to="/:id">Full Recipe</Link>
            </div>
            <div>
                <button onClick={handleClick}>Random Beer</button>
                
            </div>
        </div>
    );
}

export default RandomBeers;