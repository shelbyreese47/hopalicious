import { Link } from 'react-router-dom'

// import Multiselect from 'multiselect-react-dropdown';

function BeerSearch({id, setId, url, setUrl, formstate, setFormstate, initialState}) {

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
                    onChange={handleChange} 
                    value={formstate.name }/>
            <label className="c12">IBU</label>
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

                <input className="c22" id="ibu" 
                    type='text'
                    onChange={handleChange} 
                    value={formstate.ibu }/>
            <label className="c13">ABV</label>
                <input className="c23" id="abv" 
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.abv }/>
            <label className="c14">Yeast</label>
                <input className="c24" id="yeast" 
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.yeast }/>
            <label className="c15">Hops</label>
                <input className="c25" id="hops" 
                    type='text' 
                    onChange={handleChange} 
                    value={formstate.hops }/>
            <label className="c16">Malt</label>
                <input className="c26" id="malt" 
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