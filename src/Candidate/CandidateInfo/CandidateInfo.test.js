import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CandidateInfo from './CandidateInfo';

const getCandidate = (candidate) => {
  return <CandidateInfo candidate={candidate} />;
}

const candidate1 = {
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

const candidate2 = {
  "id": 3,
  "imageUrl":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWfkA6fPozy8qlbL8q282B2jWo10s-UK2bYFLv1b_v32r5TAF",
  "name": "Raoul Marquardt",
  "newThisWeek": false,
  "career": "Chief Security Representative",
  "lastCompanies": [
    "Thompson, Hintz and Walker",
    "Aufderhar, Goldner and Dach",
    "Predovic, Gutkowski and Lubowitz"
  ],
  "university": "Kentucky",
  "cities": ["Lake Bridgette", "Abeton", "Rio de Janeiro", "Recife"],
  "mainSkills": ["Creative", "Solutions"]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CandidateInfo candidate={candidate1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly with less than 3 cities and new this week', () => {
  const tree = renderer.create(getCandidate(candidate1).toJSON);
  expect(tree).toMatchSnapshot();
});

it('renders correctly with more than 3 cities', () => {
  const tree = renderer.create(getCandidate(candidate2).toJSON);
  expect(tree).toMatchSnapshot();
});