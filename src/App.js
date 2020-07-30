import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom"
import PokeInd from './components/PokeInd'
import PokeInfo from './components/PokeInfo'
import axios from 'axios'
import './App.css';


function App() {
  //Reconfigure this for Pokemon
  const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			const pokemon = await axios
        .get('http://localhost:5000/pokemon') //how do I put the api in? 
        .then(result => result.data)
      return pokemon;
      
		};
		fetchPokemon().then(res => setPokemon(res));
	}, []);

  return (
    <div className="App">
      <h1>Pokemon Fight!</h1>

{/* // ROUTER // */}
<div className="Router">
      <Switch>
						<Route exact path="/">
            <div className="homeRoute">Here is a list of all the Pokemon in the fucking universe!</div>
              <div className="masterList">
                <ul>
                  {pokemon.map(pokeInd => (
                    <li key={pokeInd.id}><Link className="link" to={`/pokemon-${pokeInd.id}`}>{pokeInd.id}: {pokeInd.name.english}</Link></li>
                  ))}
                </ul>
              </div>
            </Route>
						<Route exact path="/pokemon-:id">
							<PokeInd pokemon={pokemon} />
						</Route>
						<Route exact path="/pokemon-:id/info">
							<PokeInfo pokemon={pokemon} />
						</Route>
			</Switch>

</div>
      
    </div>
  );
}

export default App;

/* 3 Routes:
1. Return POkemon names in a list and includes link to the detailed view
2. /pokemon/:id - detailed view with name, type, base
3. /pokemon/:id/:info - super detailed view with only the name or the types and or the bases




*/