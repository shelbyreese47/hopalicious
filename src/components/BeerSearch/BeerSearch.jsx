import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Beers from './Beers';
// import Multiselect from 'multiselect-react-dropdown';

function BeerSearch({id, setId, url, setUrl}) {
    const initialState = {
        name: '',
        ibu:'',
        abv: '',
        yeast: '',
        hops: '',
        malt: ''
    }

    const [formstate, setFormstate] = useState(initialState);
    
    function handleChange(event) {
        setFormstate({ ...formstate, [event.target.id]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
    // do something with the data in the component state
    console.log(formstate);
    // clear the form
    <Route
					path='/search/:id'
					render={() => (
						<Beers
							key={id}
							id={id}
							setId={setId}
							url={url}
							setUrl={setUrl}
						/>)}/>
    // setFormstate(initialState);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Beer Name</label>
                <input id="name" type='text' 
                    onChange={handleChange} 
                    value={formstate.name }/>
            <label>IBU</label>
            {/* <select name="selectList" id="selectList">
                <option value="option 1">0-10</option>
                <option value="option 2">10-20</option>
                <option value="option 1">0-10</option>
                <option value="option 1">0-10</option>
                <option value="option 1">0-10</option>

            </select>
            <Multiselect
                options={}
                selectedValues={} */}

                <input id="ibu" 
                    type='text'
                    onChange={handleChange} 
                    value={formstate.ibu }/>
            <label>ABV</label>
                <input id="abv" 
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.abv }/>
            <label>Yeast</label>
                <input id="yeast" 
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.yeast }/>
            <label>Hops</label>
                <input id="hops" 
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.hops }/>
            <label>Malt</label>
                <input id="malt" 
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.malt }/>
            <button type="submit">Search</button>
        </form>
    );
}

export default BeerSearch;