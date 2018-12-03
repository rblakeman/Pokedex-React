import React, { Component } from 'react'
import './App.css'

import Input from './componenets/input'
import Pokemon from './componenets/pokemon'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: { margin: 20 },
  inputs: { padding: 10 }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.PokeAPI = this.PokeAPI.bind(this)
    this.PokeAPIitem('4')
  }

  state = {
    entry: '',
    name: '',
    sprite: '',
    types: []
  }

  PokeAPI(entry) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${entry}/`)
      .then((response) => {
        if (!response.ok) {
          console.log('caught')
          return
        }
        return response.json()
      })
      .then((data) => {
        this.setState({ types: [] })
        this.setState({
          name: data.name,
          sprite: data.sprites.front_default,
          entry: data.id
        })
        data.types.map((e, i) => {
          let newTypes = this.state.types
          newTypes.push(data.types[i].type.name)
          this.setState({ types: newTypes })
        })
      })
  }

  PokeAPIitem(item) {
    fetch(`https://pokeapi.co/api/v2/item/${item}/`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          name: data.name,
          sprite: data.sprites.default,
          entry: '',
          types: []
        })
      })
  }

  render() {
    return (
      <div className="App" style={styles.container}>
        <div style={styles.title}>Pokedex Lookup</div>
        <div style={styles.inputs}>
          <Input onInputSubmit={this.PokeAPI} />
        </div>
        <Pokemon
          name={this.state.name}
          number={this.state.entry}
          sprite={this.state.sprite}
          types={this.state.types}
        />
      </div>
    )
  }
}

export default App
