import React from 'react';
import ReactDOM from 'react-dom';
import App from './Candidate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Candidate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
