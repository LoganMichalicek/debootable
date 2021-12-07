import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

export default class Join extends React.Component {
  constructor(props) {
    super(props);
    this.searchForGame = this.searchForGame.bind(this);
  }

  searchForGame(code) {
    // do a thing
    e.preventDefault();
    console.log(`Searching for game #${code}...`)
  }

  render() {
    return (
      <div>
        <h1>Join!</h1>
        <form onSubmit={this.searchForGame}>
          <input type="text" placeholder="Enter game code here!" />
          <button type="submit">Search</button>
        </form>
        <button>
          <NavLink to="/">Back</NavLink>
        </button>
      </div>
    );
  }
}