import { Link } from 'react-router-dom'

// import Multiselect from 'multiselect-react-dropdown';

function BeerSearch({id, setId, formstate, setFormstate, initialState}) {

    function handleChange(event) {
        setFormstate({ ...formstate, [event.target.id]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormstate(initialState);
    }


    return (
    <div className="searchForm" >  
        <h2>Search Items:</h2>  
        <form  className="searchFields" onSubmit={handleSubmit}>
            <label className="c11" htmlFor="name">Beer Name</label>
                <input className="c21"id="name" type='text' 
                    placeholder="beer name"
                    onChange={handleChange} 
                    value={formstate.name }/>
                    
            {/* <label className="c12">IBU</label> */}
             <div className="hoverMess"> 
                <label className="c12">IBU
                <button className="infoButton">?</button></label>
                <div className="hoverMessage">
                    <p className="hoverTitle">International Bitter Units</p> 
                    <ul>
                        <li>Lagers: 5-10 IBU</li>
                        <li>Bavarian hefeweizen: 8-12 IBU</li>
                        <li>Amber Lagers: 20-25 IBU</li>
                        <li>American Pale Ales: 35-40 IBU</li>
                        <li>Americans India Pale Ales (IPAs): 55-70 IBU</li>
                        <li>Double IPAs: 65-100 IBU</li>
                    </ul>
                    {/* I found out how to do this on StackOverflow */}
                </div>
            </div>
            
            <select onChange={handleChange} className= "c22" name="ibu" id="ibu">
                <option value="">Select One</option>
                <option value="0">0-10</option>
                <option value="11">11-20</option>
                <option value="21">21-30</option>
                <option value="31">31-40</option>
                <option value="41">41-50</option>
                <option value="51">51-60</option>
                <option value="60">60+</option>
            </select>
          {/* <Multiselect
                options={}
                selectedValues={} */}

                {/* <input className="c22" id="ibu" 
                    type='text'
                    onChange={handleChange} 
                    value={formstate.ibu }/> */}
            <label className="c13">ABV</label>
                <input className="c23" id="abv" 
                    type='text' 
                    placeholder="abv"
                    onChange={handleChange} 
                    value={formstate.abv }/>
            <label className="c14">Yeast</label>
                <input className="c24" id="yeast" 
                    type='text'
                    placeholder="yeast " 
                    onChange={handleChange} 
                    value={formstate.yeast }/>
            <label className="c15">Hops</label>
                <input className="c25" id="hops" 
                    placeholder="hops"
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.hops }/>
            <label className="c16">Malt</label>
                <input className="c26" id="malt" 
                    placeholder="malt"
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.malt }/>
        </form>
                    <Link to="/search/beers">
            <button className="searchButton" type="submit" onSubmit={handleSubmit}>Search</button>
                    </Link>
</div>        
    );
}

export default BeerSearch;