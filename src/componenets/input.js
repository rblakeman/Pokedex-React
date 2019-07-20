import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    margin: '10px'
  },
  button: {
    backgroundColor: '#ee1515',
    color: 'white',
    margin: '0px 5px',
    textTransform: 'none'
  }
}

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onInput = (event) => {
    this.setState({ value: event.target.value })
  }

  onSubmit = (e) => {
    if (this.state.value.length > 0)
      this.props.onInputSubmit(this.state.value.toLowerCase())
  }

  render() {
    return (
      <div style={styles.container}>
        <TextField
          // id="outlined-full-width"
          label="Name or Number"
          style={styles.input}
          placeholder="Charmander"
          // helperText="Type a name or entry number"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.onInput}
          value={this.state.value}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              ev.preventDefault()
              this.onSubmit()
            }
          }}
        />
        <Button
          variant="outlined"
          style={styles.button}
          onClick={this.onSubmit}
        >
          Submit
        </Button>
      </div>
    )
  }
}
