import React, { Component } from 'react';

class Pokemons extends Component {

    render() {
        return (
            <>
                {this.props.pokemons.map( pokemon => {
                    return(
                            <div key={pokemon.id} className="pokemon">
                            <h2>Pokemon: { pokemon.name }</h2>
                            <h3>Captured at: { pokemon.location }</h3>
                            <h4>Secret Move: {pokemon.move }</h4>
                            </div>
                        )
                })}
            </>
        )
    }
}

export default Pokemons;