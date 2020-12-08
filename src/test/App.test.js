import React from 'react';
import App from '../app';
import { shallow } from 'enzyme';


describe('Rendering ', () => {
  it(' App should render without crushing', () => {   
    shallow(<App />);
  });
});