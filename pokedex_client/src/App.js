import React, { Component } from 'react';
import Pokemons from './components/Pokemons.js';

class App extends Component {

  state = {
    pokemons : [],
    formInputs: {
      name: '',
      location: '',
      move: ''
    }
  }

  componentDidMount() {
    this.getPokemons()
}

getPokemons = () => {
    fetch('http://localhost:3000/pokemons')
        .then(response => response.json())
        .then(json => this.setState({pokemons: json}))
        .catch(error => console.error(error))
}

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
  handleSubmit =(event) => {
    event.preventDefault()
    fetch('http://localhost:3000/pokemons', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
    headers: {
     'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then(createdPokemon => {
      return createdPokemon.json()
    })

    .then(jsonedPokemon => {
     // reset the form
     // add notice to notices
      this.setState({
        formInputs: {
          name: '',
          location: '',
          move: ''
        },
        pokemons: [jsonedPokemon, ...this.state.pokemons]
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      
      <div className="App"> 
          <div className="header">
            <h1> Fakerdex </h1>
          </div>
        <div className="container">
        <main>
          <Pokemons pokemons={this.state.pokemons}/>
        </main>
        <nav>
          <h4>Add your Pokemon</h4>
          <form onSubmit={this.handleSubmit}> 

          <label htmlFor="name">Pokemon</label>
          <input 
          type="text" id="name" 
          value={this.state.formInputs.name}
          onChange={this.handleChange}/>

          <label htmlFor="location">Location</label>
          <input type="text" id="location" 
          value={this.state.formInputs.location}
          onChange={this.handleChange}/>

          <label htmlFor="move">Move</label>
          <input type="text" id="move" 
          value={this.state.formInputs.move}
          onChange={this.handleChange}/>
          <input type="submit" className="submit"/>
        </form>
        </nav>
        <aside></aside>
      </div>
        <footer />
      </div> 
      );
  }
} 

export default App;


