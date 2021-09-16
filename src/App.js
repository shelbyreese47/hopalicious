import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './components/Header/Home';
import RandomBeers from './components/RandomBeer/RandomBeers';
import BeerSearch from './components/BeerSearch/BeerSearch';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Link to='/'>
					<h1>hopalicious</h1>
				</Link>
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route path='/random' component={RandomBeers} />
				<Route path='/search' component={BeerSearch} />
			</main>
		</div>
	);
}

export default App;
