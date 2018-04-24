import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Candidate from './Candidate';

let candidate = {
  "id": 3,
  "imageUrl":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWfkA6fPozy8qlbL8q282B2jWo10s-UK2bYFLv1b_v32r5TAF",
  "name": "Raoul Marquardt",
  "newThisWeek": true,
  "career": "Chief Security Representative",
  "lastCompanies": [
    "Thompson, Hintz and Walker",
    "Aufderhar, Goldner and Dach",
    "Predovic, Gutkowski and Lubowitz"
  ],
  "university": "Kentucky",
  "cities": ["Lake Bridgette", "Abeton"],
  "mainSkills": ["Creative", "Solutions"]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Candidate candidate={candidate} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders and match snapshot', () => {
  const tree = renderer.create(<Candidate candidate={candidate} />);
  expect(tree).toMatchSnapshot();
});