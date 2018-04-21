import React, { Component } from 'react';
import './CandidateActions.css';

import staricon from '../../img/star.svg';
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

    return (
      <div className="CandidateActions">
        <button onClick={this._markAsFavorite.bind(this)} className="CandidateActions__button">
          <img src={staricon} />
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
    this._toggleOptions(false);
    this.props.onRemoveClick();
  }
}

export default CandidateActions;
