import React from 'react';
import ReactDOM from 'react-dom';
import App from './CandidateActions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CandidateActions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
