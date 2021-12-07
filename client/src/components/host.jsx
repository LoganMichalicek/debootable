import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

export default class Host extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Host!</h1>
        <button>
          <NavLink to="/">Back</NavLink>
        </button>
      </div>
    );
  }
}