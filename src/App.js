import React, { Component } from 'react';

import './App.css';
import Input from './componenets/input';
import Pokemon from './componenets/pokemon';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: { margin: '20px', fontSize: '24px' },
    inputs: { padding: '10px' }
};

const LOADING_STATE = {
    loaded: false,
    entry: '',
    name: '',
    sprite: '',
    types: ['???'],
    stats: [],
    moves: [],
    height: '',
    weight: ''
};

// #ee1515 red
// #f00000 red
// #222224 black
// #f0f0f0 white

class App extends Component {
    constructor(props) {
        super(props);
        this.PokeAPI = this.PokeAPI.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.PokeAPIitem('4');

        this.state = {
            ...LOADING_STATE,
            windowWidth: 0,
            windowHeight: 0,
            shrink: false
        };

        console.log('last updated: March 16, 2021');
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        if (window.innerHeight < 500) {
            if (!this.state.shrink) this.setState({ shrink: true });
        } else {
            if (this.state.shrink) this.setState({ shrink: false });
        }
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    PokeAPI(entry) {
        this.setState({
            ...LOADING_STATE
        });
        fetch(`https://pokeapi.co/api/v2/pokemon/${entry}/`)
            .then((response) => {
                if (!response.ok) {
                    let failedRespones = [
                        'You missed the Pokemon!',
                        'Darn! The Pokemon broke free!',
                        'Aww! It appeared to be caught!',
                        'Shoot! It was so close too!'
                    ];
                    console.log(
                        failedRespones[Math.floor(Math.random() * failedRespones.length)]
                    );

                    return false;
                }

                return response.json();
            })
            .then((data) => {
                if (!data) return;
                // console.log(data)

                let newTypes = [];
                data.types.forEach((e) => {
                    newTypes.push(e.type.name);
                });

                let newStats = [];
                data.stats.forEach((e) => {
                    newStats.push({
                        name: e.stat.name,
                        base_stat: e.base_stat,
                        effort: e.effort
                    });
                });

                let newMoves = [];
                data.moves.forEach((e, i) => {
                    newMoves.push({
                        name: e.move.name,
                        version_group_details: e.version_group_details
                    });
                });

                this.setState({
                    name: data.name,
                    sprite: data.sprites.front_default,
                    entry: data.id,
                    types: newTypes,
                    stats: newStats,
                    moves: newMoves,
                    height: data.height,
                    weight: data.weight,
                    loaded: true
                });
                console.log(
                    `All right! ${data.name.charAt(0).toUpperCase() +
            data.name.substr(1)} was caught!`
                );
            });
    }

    PokeAPIitem(item) {
        // uncomment when incorporating items
        // this.setState({
        //   ...LOADING_STATE
        // })
        fetch(`https://pokeapi.co/api/v2/item/${item}/`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    name: data.name,
                    sprite: data.sprites.default,
                    entry: '',
                    types: [],
                    loaded: true
                });
            });
    }

    render() {
        // console.log(this.state)
        return (
            <div className="App" style={styles.container}>
                {this.state.shrink ? (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <div style={{ margin: '10px', fontSize: '24px' }}>
                            Pokédex
                        </div>
                        <div style={{ padding: '5px' }}>
                            <Input onInputSubmit={this.PokeAPI} shrink={this.state.shrink} />
                        </div>
                    </div>
                ) : null}
                {this.state.shrink ? null : (
                    <div style={styles.title}>Pokédex Lookup</div>
                )}

                {this.state.shrink ? null : (
                    <div style={styles.inputs}>
                        <Input onInputSubmit={this.PokeAPI} />
                    </div>
                )}

                <Pokemon
                    name={this.state.name}
                    number={this.state.entry}
                    sprite={this.state.sprite}
                    types={this.state.types}
                    stats={this.state.stats}
                    moves={this.state.moves}
                    height={this.state.height}
                    weight={this.state.weight}
                    loaded={this.state.loaded}
                    shrink={this.state.shrink} />
            </div>
        );
    }
}

export default App;
