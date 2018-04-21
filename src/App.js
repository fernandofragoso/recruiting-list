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
    //Remove candidate
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

    let candidate = this.state.candidates.find(candidate => {
      return (candidate.id === id);
    });
    let favorite = (candidate.favorite) ? false : true;
    candidate.favorite = favorite;
    
    //update candidate
    fetch(`${this.url}${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(candidate)
    }).then(res => res.json())
    .then(response => {
      //update state
      this.setState(prevState => {
        return {
          candidates: prevState.candidates.map(candidate => {
            if (candidate.id === id) {
              candidate.favorite = favorite;
            }
            return candidate;
          })
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
    
  }
}

export default App;
