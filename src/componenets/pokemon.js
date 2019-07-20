import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
const styles = {
  card: {
    margin: '20px',
    width: '200px',
    height: '200px',
    display: 'flex',
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
    alignItems: 'center'
  },
  top: {
    margin: '10px'
  },
  sprite: { margin: '-15px' },
  bottom: { margin: '10px' }
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

  renderTypes() {
    return (
      <div style={styles.bottom}>
        {this.props.types.map((e, i) => {
          if (i !== this.props.types.length - 1) {
            return this.firstUpper(e) + ', '
          }
          return this.firstUpper(e)
        })}
      </div>
    )
  }

  render() {
    return (
      <Card style={styles.card}>
        <div style={styles.top}>
          {this.attachPound(this.props.number)}{' '}
          {this.firstUpper(this.props.name)}
        </div>
        <div style={styles.sprite}>
          <img
            style={{ width: '150px', height: '150px' }}
            src={this.props.sprite}
            alt="pokemon sprite"
          />
        </div>
        {this.renderTypes()}
      </Card>
    )
  }
}
