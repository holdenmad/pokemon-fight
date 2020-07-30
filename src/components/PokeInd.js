import React from 'react'
import {Link, useParams} from 'react-router-dom'

export const PokeInd = ({pokemon}) => {
    let {id} = useParams();
    let pokeId = parseInt(`${id}`)
    let pokeDeets = pokemon.filter((pokeInd) => {
        return pokeInd.id === pokeId;
    }).map((pokeInd)=> {
        return pokeInd;
    });

    return (
        <div className="pokeInd">
           
                <div>Here's basic info about this individual Pokemon!</div>
                
                  {pokeDeets.map(pokeInd => (
                    <div key={pokeInd.id} className="pokeIndStats">
                    <h3 >{pokeInd.name.english}</h3>
                    <div>
                        <div>Type: {pokeInd.type.map(type => (
                            <div className="baseInfo">{type}</div>
                        ))}
                        </div>
                        <div>Base:</div>
                        <div className="baseInfo">
                            {Object.entries(pokeInd.base).map((key, value) => (
                                <div>{key[0]}: {key[1]}</div>
                            ))}
                        </div>
                            {/* <div>HP: {pokeInd.base.HP}</div>
                            <div>Attack: {pokeInd.base.Attack}</div>
                            <div>Defense: {pokeInd.base.Defense}</div>
                            <div>Sp. Attack: {pokeInd.base.SpAttack}</div>
                            <div>Sp. Defense: {pokeInd.base.SpDefense}</div>
                            <div>Speed: {pokeInd.base.Speed}</div> */}

                    <Link to={`/pokemon-${pokeInd.id}/info`}>
                        <button className="deetsBtn">More deets!</button>
                    </Link>
                    </div>
                    </div>
                  ))}
        </div>
    )
}

export default PokeInd;