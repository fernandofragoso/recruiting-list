import React, { Component } from 'react';
import './App.css';

import Candidate from './Candidate/Candidate';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      candidates: []
    };
  }

  componentWillMount() {
    //API URL
    const url = "http://localhost:3000/candidates/";

    //fetch candidates
    fetch(url, {
      method: 'GET'
    }).then(res => res.json())
    .then(response => {
      this._setCandidates(response);
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    const list = this.state.candidates.map(candidate => {
      return <Candidate key={candidate.id} candidate={candidate} />
    });
    return (
      <div className="App">
        {list}
      </div>
    );
  }

  _setCandidates(candidates) {
    const sortedCandidates = candidates.sort((a, b) => {
      return (a.name.toUpperCase() >= b.name.toUpperCase()) ? 1 : -1;
    });
    this.setState({
      candidates: candidates
    });
  }
}

export default App;
