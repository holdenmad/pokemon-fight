import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom"
import PokeInd from './components/PokeInd'
import PokeInfo from './components/PokeInfo'
import axios from 'axios'
import './App.css';


function App() {
  //Reconfigure this for Pokemon
  const [pokemon, setPokemon] = useState([]);
  // const [pokePic, setPokePic] = useState([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			const pokemon = await axios
        .get('https://poke-api-holden.herokuapp.com/pokemon') //how do I put the api in? 
        .then(result => result.data)
      return pokemon;
      
		};
		fetchPokemon().then(res => setPokemon(res));
  }, []);
  
  // useEffect(() => {
  //   const fetchPic = async()=> {
  //     const pokePic = await axios
  //     .get('')
  //   }
  // })

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
                    <div>
                    <li key={pokeInd.id}><Link className="link" to={`/${pokeInd.id}`}>
                      <img className="pokePic" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeInd.id}.png`} alt={`${pokeInd.name.english}`}/>
                      {pokeInd.id}: {pokeInd.name.english}</Link>
                    </li>
                    </div>
                  ))}
                </ul>
              </div>
            </Route>
						<Route exact path="/:id">
							<PokeInd pokemon={pokemon} />
						</Route>
						<Route exact path="/:id/info">
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