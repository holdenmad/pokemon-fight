import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { AddCircle } from 'grommet-icons';

import { Box, Text, Anchor, Image } from 'grommet';

const partyList = [
    {
        id: 1
    },
    {
        id: 2
    }
];

const FrontPage = ({pokemon}) => {
    const [party, setParty] = useState(partyList);

    const handleAdd = (e) => {
        setParty(e.target.value);
        console.log(e.target.parentElement.parentElement)
    }

    return (
        <Box flex direction="column" alignContent="center">
            <Box background="accent-2" flex align='center'>
                <Text weight="bold" margin='small' className="homeRoute">Choose your party!</Text>
            </Box>
            <Box flex align="center" justify="center" className="masterList">
                {pokemon.map(pokeInd => (
                <Box key={pokeInd.id} margin='small' background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)" width='medium' round='small' border={{color: 'accent-2', type:'solid', size:'small'}}>
                    <Anchor>
                        <Link className="link" to={`/${pokeInd.id}`}>
                            <Box flex direction="row" align='center' justify='center' key={pokeInd.id}> 
                                <Image className="pokePic" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeInd.id}.png`} alt={`${pokeInd.name.english}`}/>
                                <Text alignSelf='center' align='center' color='accent-1'>{pokeInd.id}: {pokeInd.name.english}</Text>
                            </Box>
                        </Link>
                    </Anchor>
                    <Anchor><AddCircle onClick={handleAdd} className="overlay" flex size='medium'/></Anchor>
                </Box>
                ))}
            </Box>
            </Box>
    )
}

export default FrontPage
