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
    <>    
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
                    <Link to="/search/beers">
            <button type="submit" onSubmit={handleSubmit}>Search</button>
                    </Link>
        </form>
</>        
    );
}

export default BeerSearch;