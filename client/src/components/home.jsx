import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Home!</h1>
        <button id="join-game-button">
          <NavLink to="/join">Join</NavLink>
        </button>
        <button id="host-game-button">
          <NavLink to="/host">Host</NavLink>
        </button>
      </div>
    );
  }
}