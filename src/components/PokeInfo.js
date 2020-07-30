import React from 'react'
import {useParams} from 'react-router-dom'
import PokeInd from './PokeInd'

export const PokeInfo = ({pokemon}) => {
    let {id} = useParams();
    let pokeId = parseInt(`${id}`)
    let pokeDeets = pokemon.filter((pokeInd) => {
        return pokeInd.id === pokeId;
    }).map((pokeInd)=> {
        return pokeInd;
    });
    return (
        <div className="PokeInfo">
        <PokeInd/>
           <div>Here's detailed info about this Pokemon's base and type!</div> 
           <div>
           {pokeDeets.map(pokeInd => 
                <div></div>
           )}

           </div>
        </div>
    )
}

export default PokeInfo