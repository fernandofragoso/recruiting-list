import React, { Component } from 'react';
import './App.css';

import Candidate from './Candidate/Candidate';

class App extends Component {
  
  url = "http://localhost:3000/candidates/";

  constructor() {
    super();
    this.state = {
      candidates: []
    };
  }

  componentWillMount() {
    //fetch candidates
    fetch(this.url, {
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
      return <Candidate 
        key={candidate.id} 
        candidate={candidate} 
        onRemove={() => this._remove(candidate.id)}
        onFavorite={() => this._favorite(candidate.id)} />
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

  _remove(id) {
    //Remove candidates
    fetch(`${this.url}${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
    .then(response => {
      //Remove from state
      this.setState(prevState => {
        return {
          candidates: prevState.candidates.filter(candidate => {
            return (candidate.id !== id)
          })
        }
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  _favorite(id) {
    alert(id);
  }
}

export default App;
