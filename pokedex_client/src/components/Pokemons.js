import React, { Component } from 'react';

class Pokemons extends Component {

    render() {
        return (
            <>
                {this.props.pokemons.map( pokemon => {
                    return(
                            <div key={pokemon.id} className="pokemon">
                            <h2>{ pokemon.name }</h2>
                            <h3>{ pokemon.location }</h3>
                            <h4>{pokemon.move }</h4>
                            </div>
                        )
                })}
            </>
        )
    }
}

export default Pokemons;