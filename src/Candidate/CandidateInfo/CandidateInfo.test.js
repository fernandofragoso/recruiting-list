import React from 'react';
import ReactDOM from 'react-dom';
import App from './CandidateInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CandidateInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
