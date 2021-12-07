import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/home.jsx';
import Join from './components/join.jsx';
import Host from './components/host.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router forceRefresh>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/host" element={<Host />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));