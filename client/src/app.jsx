import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Loaded from React!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));