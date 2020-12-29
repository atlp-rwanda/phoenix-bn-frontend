import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

describe('Rendering ', () => {
  it(' App should render without crushing', () => {
    shallow(<App />);
  });
});
