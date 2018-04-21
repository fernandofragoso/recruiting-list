import React, { Component } from 'react';
import './Candidate.css';

class App extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Candidate">
        <section className="Candidate__left">
          <img className="Candidate__image" alt="Candidate" src={this.props.candidate.imageUrl} />
        </section>
        <section className="Candidate__center">
          <h3>{this.props.candidate.name}</h3>
          <h4>{this.props.candidate.career}</h4>
        </section>
        <section className="Candidate__right">
        </section>
        
      </div>
    );
  }
}

export default App;
