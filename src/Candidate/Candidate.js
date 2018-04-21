import React, { Component } from 'react';
import './Candidate.css';

import CandidateInfo from './CandidateInfo/CandidateInfo';
import CandidateActions from './CandidateActions/CandidateActions';

class Candidate extends Component {
  
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
          <CandidateInfo candidate={this.props.candidate} />
        </section>
        <section className="Candidate__right">
          <CandidateActions 
            onFavoriteClick={() => this.props.onFavorite()}
            onRemoveClick={() => this.props.onRemove()} />
        </section>
      </div>
    );
  }

}

export default Candidate;
