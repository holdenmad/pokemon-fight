import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { Anchor, Box, Header, Nav, Image, Text, Button } from 'grommet';


export const PokeInd = ({pokemon}) => {
    let {id} = useParams();
    let pokeId = parseInt(`${id}`)
    let pokeDeets = pokemon.filter((pokeInd) => {
        return pokeInd.id === pokeId;
    }).map((pokeInd)=> {
        return pokeInd;
    });

    return (
        <Box className="pokeInd">
            <Box flex align='center'>
            <Text margin='small' align='center'>Here's basic info about this individual Pokemon!</Text>            
            </Box>
                
                
                  {pokeDeets.map(pokeInd => (
                    <Box flex align='center' justify='center'>
                        <Box flex align='center' justify='center' direction='column' margin='small' background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)" width='small' round='small' border={{color: 'accent-2', type:'solid', size:'small'}} key={pokeInd.id} className="pokeIndStats">
                            <Text margin='small' textAlign="center">{pokeInd.name.english} <br/> #{pokeInd.id}<br/></Text>
                            <Image fill='false' alignSelf='center' className="pokePic" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeInd.id}.png`} alt={`${pokeInd.name.english}`}/>

                        <Box>
                        <Text>Type: {pokeInd.type.map(type => (
                            <Text className="baseInfo">{type}</Text>
                        ))}
                        </Text>
                        <Text>Base:</Text>
                        <Box className="baseInfo">
                            {Object.entries(pokeInd.base).map((key, value) => (
                                <Text>{key[0]}: {key[1]}</Text>
                            ))}
                        </Box>
                            {/* <div>HP: {pokeInd.base.HP}</div>
                            <div>Attack: {pokeInd.base.Attack}</div>
                            <div>Defense: {pokeInd.base.Defense}</div>
                            <div>Sp. Attack: {pokeInd.base.SpAttack}</div>
                            <div>Sp. Defense: {pokeInd.base.SpDefense}</div>
                            <div>Speed: {pokeInd.base.Speed}</div> */}

                    <Link className="link" to={`/${pokeInd.id}/info`}>
                        <Box  align='center' pad='medium'>
                            <Button primary hoverIndicator='true' color='accent-1' label="More Deets!" className="deetsBtn"/>
                        </Box>
                    </Link>
                    </Box>
    
                    </Box>
                    </Box>
                  ))}
        </Box>
    )
}

export default PokeInd;