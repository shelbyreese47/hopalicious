import './App.css';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react'
import Home from './components/Header/Home';
import RandomBeers from './components/RandomBeer/RandomBeers';
import BeerSearch from './components/BeerSearch/BeerSearch';
import BeerDetails from './components/beerDetails/BeerDetails.jsx'

function App() {
  const [id, setId] = useState();
  const [url, setUrl]= useState();
	return (
		<div className='App'>
			<header className='App-header'>
				<Link to='/'>
					<h1>hopalicious</h1>
				</Link>
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/random'
					render={() => <RandomBeers id={id} setId={setId} />}
				/>
				<Route path='/search' component={BeerSearch} />
				<Route path='/random/:id' 
          render={()=><BeerDetails 
              id={id} 
              setId={setId}
              url={url}
              setUrl={setUrl} 
              />} 
                />
			</main>
		</div>
	);
}

export default App;
