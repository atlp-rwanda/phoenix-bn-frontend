import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { mount} from 'enzyme';
import store from '../store';
import App from '../app';
import Signup from '../pages/signup';
import TopNav from '../components/common/AuthTopNav';
import Dashboard from '../pages/DashBoard';

describe('Testing Signup ', () => {
  it('should render dashbaord', () => {
    const wrapper = renderer.create(<Provider store={store}><Router><Dashboard /></Router></Provider>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('top navigation  should be rendered', () => {
    const wrapper = renderer.create(<Provider store={store}><Router><TopNav /></Router></Provider>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should fillup and submit the signup form', () => {
    const wrapper = mount(<Provider store={store}><Router><Signup /></Router></Provider>);
    const firstName = wrapper.find('#firstName');
    firstName.simulate('change', { target: { name: 'firstName', value: 'umuhire' } });
    const lastName = wrapper.find('#lastName');
    lastName.simulate('change', { target: { name: 'lastName', value: 'umuhire' } });
    const email = wrapper.find('#email');
    email.simulate('change', { target: { name: 'email', value: 'umuhire@test.com' } });
    const password = wrapper.find('#Password');
    password.simulate('change', { target: { name: 'password', value: 'umuhire' } });
    const ConfirmPassword = wrapper.find('#confirmPassword');
    ConfirmPassword.simulate('change', { target: { name: 'confirmPassword', value: 'umuhire' } });
    const button = wrapper.find('#submitButton');
    button.simulate('click');
    const form = wrapper.find('form');
    form.simulate('submit');
  });
});
