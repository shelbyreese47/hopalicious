import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Beer from './Beer';


function Beers({id, setId}) {
    const [click, setClick] = useState([]);
    const [beers, setBeers]= useState([]);
    
    // setId(random.id);

    let url='https://api.punkapi.com/v2/beers/random'

    useEffect(()=> {
        fetch(url)
            .then(res=>res.json())
            .then(res=> {
                setBeers(res)
                // setId(res[0].id)
            })
            .catch(err=>console.log(err))


    }, [click])

    function handleClick(event) {
        setClick([...click,'']);
    }

    return (
        <div>
            <div>
                {beers.map((beer)=>
                <Beer beer={beer}/>
                )}
            </div>
            <div>
                <button onClick={handleClick}>Random Beer</button>
                
            </div>
            <main>
                
                 
            </main>
        </div>
    );
}

export default Beers;