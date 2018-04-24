import React, { Component } from 'react';
import './CandidateInfo.css';

import workicon from '../../img/work-icn.svg';
import studyicon from '../../img/study-icn.svg';
import locationicon from '../../img/location-icn.svg';
import skillsicon from '../../img/skills-icn.svg';

class CandidateInfo extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {

    let newPill = null;
    if (this.props.candidate.newThisWeek) {
      newPill = <span className="CandidateInfo__pill CandidateInfo__pill--new">Novo essa semana</span>
    }

    return (
      <div className="CandidateInfo">
        <h3>{this.props.candidate.name} {newPill}</h3>
        <h4>{this.props.candidate.career}</h4>
        <div className="CandidateInfo__item">
          <img className="icon" alt="Work icon" src={workicon} />
          {this.props.candidate.lastCompanies.join(', ')}
        </div>
        <div className="CandidateInfo__item">
          <img className="icon" alt="Study icon" src={studyicon} />
            {this.props.candidate.university}
          </div>
        <div className="CandidateInfo__item">
          <img className="icon" alt="Location icon" src={locationicon} /><span>Disposto a trabalhar em: </span>
          {this._getCities(this.props.candidate.cities)}
        </div>
        <div className="CandidateInfo__item">
          <img className="icon" alt="Skill icon" src={skillsicon} /><span>Principais habilidades: </span>
          {this.props.candidate.mainSkills.map((skill, index) => {
            return <span key={index} className="CandidateInfo__pill CandidateInfo__pill--skill">
              {skill}
            </span>
          })}
        </div>
      </div>
    );
  }

  _getCities(cities) {
    if (cities.length > 3) {
      return <span>
        {cities.slice(0,2).join(", ")} e mais <strong>{cities.length - 2} cidades</strong>
      </span>
    } else {
      return cities.join(", ");
    }
  }
}

export default CandidateInfo;
