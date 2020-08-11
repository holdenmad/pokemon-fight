import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom"
import PokeInd from './components/PokeInd'
import PokeInfo from './components/PokeInfo'
import PokeFight from './components/PokeFight'
import Party from './components/Party'
import About from './components/About'
import { Anchor, Box, Header, Nav, Text } from 'grommet';

import HeaderNav from './components/HeaderNav'
import FrontPage from './components/FrontPage'

import axios from 'axios'
import './App.css';





function App({openNotification, handleAdd}) {
  const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			const pokemon = await axios
        .get('https://poke-api-holden.herokuapp.com/pokemon')
        .then(result => result.data)
      return pokemon;
      
		};
		fetchPokemon().then(res => setPokemon(res));
  }, []);
  
  
  return (
    <Box background="linear-gradient(#ffffff, #18BAB9 )" className="App">
      <HeaderNav/>

    {/* // ROUTER // */}
    <div className="Router">
          <Switch>
                <Route exact path="/">
                  <FrontPage pokemon={pokemon} openNotification={openNotification}/>
                </Route>
                <Route exact path="/battle">
                  <PokeFight pokemon={pokemon}/>
                </Route>
                <Route exact path="/party">
                  <Party pokemon={pokemon} handleAdd={handleAdd}/>
                </Route>
                <Route exact path="/about">
                  <About/>
                </Route>
                <Route exact path="/:id">
                  <PokeInd pokemon={pokemon} />
                </Route>
                <Route exact path="/:id/info">
                  <PokeInfo pokemon={pokemon} />
                </Route>

          </Switch>

    </div>
      
    </Box>
  );
}

export default App;

/* 3 Routes:
1. Return POkemon names in a list and includes link to the detailed view
2. /pokemon/:id - detailed view with name, type, base
3. /pokemon/:id/:info - super detailed view with only the name or the types and or the bases




*/