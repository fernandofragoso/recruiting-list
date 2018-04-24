import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CandidateActions from './CandidateActions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CandidateActions favorite='false' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly with favorite true', () => {
  const tree = renderer.create(<CandidateActions favorite='true' />);
  expect(tree).toMatchSnapshot();
});

it('renders correctly with favorite false', () => {
  const tree = renderer.create(<CandidateActions favorite='false' />);
  expect(tree).toMatchSnapshot();
});
