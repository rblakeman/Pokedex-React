import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import logo from '../logo.svg'
import LaunchIcon from '@material-ui/icons/Launch'

const styles = {
  card: {
    margin: '20px',
    width: '400px',
    height: '300px',
    display: 'flex',
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    // height: '20vmin',
    height: '100%'
  },

  left: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  top: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px'
  },
  sprite: {
    margin: '-5px 0px -5px 0px'
  },
  bottom: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0px 0px 10px 0px'
  },
  // typeHeader: {
  //   fontWeight: 'bold',
  //   textAlign: 'center'
  // },
  typeList: {
    // margin: '0px 0px 10px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  type: {
    width: '90px',
    height: '30px',
    color: 'white',
    backgroundColor: '#68A090',
    borderRadius: '40px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  right: {
    margin: '10px 0px 10px 0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  moveHeader: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  moveList: {
    overflow: 'scroll'
  },
  move: {}
}

export default class Pokemon extends Component {
  firstUpper(str) {
    if (typeof str === 'undefined') return null
    return str.charAt(0).toUpperCase() + str.substr(1)
  }

  attachPound(str) {
    if (isNaN(str) || str.length === 0) return str
    return '#' + str
  }

  // renderTypes() {
  //   return <div style={styles.bottom} />
  // }

  render() {
    const {
      name,
      number,
      sprite,
      types,
      moves,
      height,
      weight,
      loaded
    } = this.props

    return (
      <Card
        style={
          this.props.shrink ? { ...styles.card, margin: '0px' } : styles.card
        }
      >
        <div style={styles.left}>
          <div style={styles.top}>
            <div>{this.attachPound(number)} </div>
            <div>{this.firstUpper(name)}</div>
            <LaunchIcon
              onClick={() => {
                let tempURL = `https://pokeapi.co/api/v2/pokemon/${number}/`
                if (!number) tempURL = `https://pokeapi.co/api/v2/item/${name}/`
                window.open(tempURL, '_blank')
              }}
              style={{ width: '20px', height: '20px' }}
            />
          </div>
          <div style={styles.sprite}>
            {loaded ? (
              <img
                style={{ width: '150px', height: '150px' }}
                src={sprite}
                alt="pokemon sprite"
              />
            ) : (
              <img
                src={logo}
                className="App-logo"
                style={loaded ? { ...styles.logo, hidden: true } : styles.logo}
                alt="react logo"
              />
            )}
          </div>
          <div style={styles.bottom}>
            {/* <div style={styles.typeHeader}>Types</div> */}
            <div style={styles.typeList}>
              {types.map((e, i) => {
                let typeColor = '#68A090'
                if (e === 'normal') typeColor = '#A8A878'
                else if (e === 'fire') typeColor = '#F08030'
                else if (e === 'fighting') typeColor = '#C03028'
                else if (e === 'water') typeColor = '#6890F0'
                else if (e === 'flying') typeColor = '#A890F0'
                else if (e === 'grass') typeColor = '#78C850'
                else if (e === 'poison') typeColor = '#A040A0'
                else if (e === 'electric') typeColor = '#F8D030'
                else if (e === 'ground') typeColor = '#E0C068'
                else if (e === 'psychic') typeColor = '#F85888'
                else if (e === 'rock') typeColor = '#B8A038'
                else if (e === 'ice') typeColor = '#98D8D8'
                else if (e === 'bug') typeColor = '#A8B820'
                else if (e === 'dragon') typeColor = '#7038F8'
                else if (e === 'ghost') typeColor = '#705898'
                else if (e === 'dark') typeColor = '#705848'
                else if (e === 'steel') typeColor = '#B8B8D0'
                else if (e === 'fairy') typeColor = '#EE99AC'
                else typeColor = '#68A090'

                return (
                  <div
                    style={
                      i > 0
                        ? {
                            ...styles.type,
                            marginTop: '8px',
                            backgroundColor: typeColor
                          }
                        : { ...styles.type, backgroundColor: typeColor }
                    }
                    key={i}
                  >
                    {this.firstUpper(e)}
                  </div>
                )
              })}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <div>Height: {height}</div>
              <div>Weight: {weight}</div>
            </div>
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.moveHeader}>Moves</div>
          <div style={styles.moveList}>
            {moves.map((elem, idx) => {
              return (
                <div style={styles.move} key={idx}>
                  {idx}.{this.firstUpper(elem.name)}
                </div>
              )
            })}
          </div>
        </div>
      </Card>
    )
  }
}
