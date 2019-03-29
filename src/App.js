import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    card: []

  };


  componentDidMount() {

    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(response => response.json())
      .then(apiData => {
        let pokData = apiData.pokemon;
        this.setState({
          card: pokData,
        })
        // .catch(err => console.log("Oops Error: " + err))

      })
  }

  render() {
    return (
      < div className="list">

        <h1 className="header">POKEMON APP</h1>
        <div className="card">
        <ul className="list">
            {this.state.card.map(card => <li key={card.id}> <><img src={card.img} alt="Pokemon" /> <p>{card.name}</p></></li>)}
          </ul>
        </div>


      </div>


    );
  }
}

export default App;
