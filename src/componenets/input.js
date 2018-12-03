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
  text: {
    margin: 10
  },
  button: {
    margin: 10
  }
}

export default class Input extends Component {
  state = {
    value: ''
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
          id="outlined-full-width"
          label="Name or Number"
          style={styles.text}
          placeholder="Charmander"
          // helperText="Type a name or entry number"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.onInput}
          value={this.state.value}
        />
        <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={this.onSubmit}
        >
          Submit
        </Button>
      </div>
    )
  }
}
