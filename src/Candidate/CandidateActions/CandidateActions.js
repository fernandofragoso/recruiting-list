import React, { Component } from 'react';
import './CandidateActions.css';

import staricon from '../../img/star2.svg';
import starfilledicon from '../../img/starfilled2.svg';
import dotsicon from '../../img/dots.svg';

class CandidateActions extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }
  
  render() {

    let menuclasses = "CandidateActions__popover-button";
    if (this.state.showMenu) {
      menuclasses += " CandidateActions__popover-button--visible";
    }

    let star = <img src={staricon} />
    if (this.props.favorite) {
      star = <img src={starfilledicon} />
    }

    return (
      <div className="CandidateActions">
        <button onClick={this._markAsFavorite.bind(this)} className="CandidateActions__button">
          {star}
        </button>
        <div className="CandidateActions__popover-wrapper">
          <button 
            onMouseOver={() => this._toggleOptions(!this.state.showmenu)} 
            onMouseOut={() => this._toggleOptions(false)} 
            className="CandidateActions__button">
            <img src={dotsicon} />
          </button>
          <div className={menuclasses}>
            <button 
              onClick={this._removeCandidate.bind(this)} 
              onMouseOver={() => this._toggleOptions(true)} 
              onMouseOut={() => this._toggleOptions(false)} 
              className="CandidateActions__button CandidateActions__button--popover">
              Remover
            </button>
          </div>
        </div>
      </div>
    );
  }

  _markAsFavorite() {
    this.props.onFavoriteClick();
  }

  _toggleOptions(show) {
    this.setState({
      showMenu: show
    });
  }

  _removeCandidate() {
    if (window.confirm("Deseja mesmo remover o candidato?")) {
      this.props.onRemoveClick();
    }
    this._toggleOptions(false);
  }
}

export default CandidateActions;
