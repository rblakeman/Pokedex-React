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
  title: { margin: '20px', fontSize: '24px' },
  inputs: { padding: '10px' }
}

// #ee1515 red
// #f00000 red
// #222224 black
// #f0f0f0 white

class App extends Component {
  constructor(props) {
    super(props)
    this.PokeAPI = this.PokeAPI.bind(this)
    this.PokeAPIitem('4')

    this.state = {
      entry: '',
      name: '',
      sprite: '',
      types: [],
      stats: [],
      moves: [],
      height: 0,
      weight: 0
    }
  }

  PokeAPI(entry) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${entry}/`)
      .then((response) => {
        if (!response.ok) {
          let failedRespones = [
            'You missed the Pokemon!',
            'Darn! The Pokemon broke free!',
            'Aww! It appeared to be caught!',
            'Shoot! It was so close too!'
          ]
          console.log(
            failedRespones[Math.floor(Math.random() * failedRespones.length)]
          )
          return false
        }
        return response.json()
      })
      .then((data) => {
        if (!data) return
        // console.log(data)

        let newTypes = []
        data.types.forEach((e) => {
          newTypes.push(e.type.name)
        })

        let newStats = []
        data.stats.forEach((e) => {
          newStats.push({
            name: e.stat.name,
            base_stat: e.base_stat,
            effort: e.effort
          })
        })

        let newMoves = []
        data.moves.forEach((e, i) => {
          newMoves.push({
            name: e.move.name,
            version_group_details: e.version_group_details
          })
        })

        this.setState({
          name: data.name,
          sprite: data.sprites.front_default,
          entry: data.id,
          types: newTypes,
          stats: newStats,
          moves: newMoves,
          height: data.height,
          weight: data.weight
        })
        console.log(
          `All right! ${data.name.charAt(0).toUpperCase() +
            data.name.substr(1)} was caught!`
        )
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
        <div style={styles.title}>Pokédex Lookup</div>
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