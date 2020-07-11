import React, { Component } from 'react';

class Pokemons extends Component {

    handleDelete = (id, index) => {
		fetch(`http://localhost:3000/pokemons/${id}`, {
			method: 'DELETE',
		}).then(() => {
			this.setState({
				pokemons: [...this.state.pokemons.slice(0, index), ...this.state.pokemons.slice(index + 1)],
			});
		});
	};

    render() {
        return (
            <>
                {this.props.pokemons.map( pokemon => {
                    return(
                            <div key={pokemon.id} className="pokemon">
                            <h2>Pokemon: { pokemon.name }</h2>
                            <h3>Captured at: { pokemon.location }</h3>
                            <h4>Secret Move: {pokemon.move }</h4>
                            <button onClick={() => this.handleData()}>
					            Edit
				            </button>
                            <button onClick={() => ( pokemon)}>
					            Delete
				            </button>
                            </div>
                        )
                })}
            </>
        )
    }
}

export default Pokemons;