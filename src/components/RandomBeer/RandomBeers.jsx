import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function RandomBeers({id, setId}) {
    const [click, setClick] = useState([]);
    const [random, setRandom]= useState([]);
    const [error, setError] = useState(null);
    
    let url='https://api.punkapi.com/v2/beers/random'

    useEffect(()=> {
        fetch(url)
            .then(res=>res.json())
            .then(res=> {
                setRandom(res[0])
                setId(res[0].id)
            })
            .catch(err=> {
            const copy = String(err)
            setError(copy)
        })  

        //eslint-disable-next-line
    }, [click])

    function handleClick(event) {
        setClick([...click,'']);
    }

    if (error){
 
            return <h2 className="brewingMessage">{error}</h2>;
        }

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

        </div>
    );
}

export default RandomBeers;