import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

export default class Join extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Join!</h1>
        <button>
          <NavLink to="/">Back</NavLink>
        </button>
      </div>
    );
  }
}