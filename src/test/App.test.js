import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import { Router } from 'express';
import { Provider } from 'react-redux';
import store from '../store';

describe('Rendering ', () => {
  it(' App should render without crushing', () => {
    shallow(<Provider store={store}><Router><App /></Router></Provider>);
  });
});
