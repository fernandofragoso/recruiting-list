import React, { Component } from 'react';
import './App.css';

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
    return (
      <div className="App">
        <ul>
          {this.state.candidates.map(candidate => <li key={candidate.id}>{candidate.name}</li>)}
        </ul>
      </div>
    );
  }

  _setCandidates(candidates) {
    this.setState({
      candidates: candidates
    });
  }
}

export default App;
