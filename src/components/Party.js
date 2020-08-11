import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom"
import { Box, Text, Anchor, Image } from 'grommet';


export const Party = ({pokemon, handleAdd}) => {

    // let {id} = useParams();
    // let pokeId = parseInt(`${id}`)
    // let pokeDeets = pokemon.filter((pokeInd) => {
    //     return pokeInd.id === pokeId;
    // }).map((pokeInd)=> {
    //     return pokeInd;
    // });

    //where do I put these? in App.js?
    

    return (
        <Box>
            <Text>Here's your party:</Text>
            {/* <Box>
            {pokeDeets.map(pokeInd => (
                <Box key={pokeInd.id}>
                    {pokeInd.name.english}
                </Box>
            ))}
                {party.map(partyMember => (
                    <Box key={partyMember.id}>
                        {partyMember.name.english}
                    </Box>
                ))}
            </Box> */}
        </Box>
    )
}

export default Party
