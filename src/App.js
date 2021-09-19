import './App.css';
import './components/Header/Header.css'
import './components/beerDetails/BeerDetailsCss.css'
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Header/Home';
import RandomBeers from './components/RandomBeer/RandomBeers';
import BeerSearch from './components/BeerSearch/BeerSearch';
import BeerDetails from './components/beerDetails/BeerDetails.jsx';
import Beers from './components/BeerSearch/Beers';

function App() {
	const [id, setId] = useState();
	const [url, setUrl] = useState();
	const initialState = {
		name: '',
		ibu: '',
		abv: '',
		yeast: '',
		hops: '',
		malt: '',
	};

	const [formstate, setFormstate] = useState(initialState);
	return (
		<div className='App'>
			<header className='App-header'>
				<Link to='/'>
					<div className='logo'>
						<img
							className='logoImg'
							src='https://i.imgur.com/t92odqy.png'
							alt='hops'
						/>
						{/* </div>
					<div className='business'> */}
						<h1 className="business">hopalicious</h1>
					</div>
				</Link>
				<Link to='/search'>
					<div className='search'>
						<h3>search</h3>
					</div>
				</Link>
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/random'
					render={() => <RandomBeers id={id} setId={setId} />}
				/>

				<Route
					path='/random/:id'
					render={() => (
						<BeerDetails
							key={id}
							id={id}
							setId={setId}
							url={url}
							setUrl={setUrl}
						/>
					)}
				/>
				<Route
					exact
					path='/search'
					render={() => (
						<BeerSearch
							key={id}
							id={id}
							setId={setId}
							url={url}
							setUrl={setUrl}
							formstate={formstate}
							setFormstate={setFormstate}
							initialState={initialState}
						/>
					)}
				/>
				<Route
					exact
					path='/search/beers'
					render={() => (
						<Beers
							key={id}
							id={id}
							setId={setId}
							url={url}
							setUrl={setUrl}
							formstate={formstate}
							setFormstate={setFormstate}
							name={formstate.name}
							ibu={formstate.ibu}
							abv={formstate.abv}
							yeast={formstate.yeast}
							hops={formstate.hops}
							malt={formstate.malt}
						/>
					)}
				/>
				<Route
					path='/search/beers/:id'
					render={() => (
						<BeerDetails
							key={id}
							id={id}
							setId={setId}
							url={url}
							setUrl={setUrl}
						/>
					)}
				/>
			</main>
		</div>
	);
}

export default App;


//Copyright: <a href='https://www.123rf.com/profile_9dreamstudio'>9dreamstudio</a>