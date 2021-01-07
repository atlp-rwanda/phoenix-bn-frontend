import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow ,mount} from 'enzyme';
import store from '../store';
import App from '../app';
import Login from '../pages/signin';
import { Signin } from '../components/auth/signin';
import TextInput from '../components/form/TextInput';

import TopNav from '../components/common/AuthTopNav';
import TopLeftNav from '../components/common/TopLeftNav';
import Dashboard from '../pages/DashBoard';
import About from '../pages/About';
import Help from '../pages/Help';
import SocialAuthRedirect from '../pages/socialAuthRedirect';

describe('Testing Signin ', () => {
  it('should render dashbaord', () => {
    const wrapper = renderer.create(<Provider store={store}><Router><Dashboard /></Router></Provider>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('top navigation  should be rendered', () => {
    const wrapper = renderer.create(<Provider store={store}><Router><TopNav /></Router></Provider>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should fillup and submit the Signin form', () => {
    const wrapper = mount(<Provider store={store}><Router><Login /></Router></Provider>);
    const email = wrapper.find('#email');
    email.simulate('change', { target: { name: 'email', value: 'elysee@gmail.com' } });
    const password = wrapper.find('#Password');
    password.simulate('change', { target: { name: 'password', value: 'elysee123' } });
    const button = wrapper.find('#submitButton');
    button.simulate('click');
    const form = wrapper.find('form');
    form.simulate('submit');

  });
});

describe("Login from", () => {
    let wrapper;
    let handleSubmit;
    beforeEach(() => {
        handleSubmit = jest.fn();
        wrapper = shallow(<Login submit={handleSubmit} />);
    });

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should Render Signin componets",()=>{
      wrapper = shallow(<Router><Signin/></Router>);
      expect(wrapper).toMatchSnapshot();
    })
})

describe("handleInput", () => {
    let wrapper;
    it("should call setState on email", () => {
      wrapper = shallow(<Signin/>);
      const email = wrapper.find('#email');
      email.simulate('input', { target: { name: 'email', value: 'elysee@gmail.com' } });
    });
  });

  describe("components rendering ", ()=>{
    it('TextInput should render correctly ',()=>{
      const wrapper = renderer.create(<TextInput/>).toJSON();
      expect(wrapper).toMatchSnapshot();
    })
    it('About should render correctly ',()=>{
      const wrapper = renderer.create(<Provider store={store}><Router><About /></Router></Provider>).toJSON();
      expect(wrapper).toMatchSnapshot();
    })
    it('Help should render correctly ',()=>{
      const wrapper = renderer.create(<Provider store={store}><Router><Help/></Router></Provider>).toJSON();
      expect(wrapper).toMatchSnapshot();
    })
    it('Social Auth Redirect should render correctly ',()=>{
      const wrapper = renderer.create(<Provider store={store}><Router><SocialAuthRedirect/></Router></Provider>).toJSON();
      expect(wrapper).toMatchSnapshot();
    })
    it.skip('should not submit with no email or password',()=>{
      const wrapper = mount(<Router><Signin /></Router>);
      console.log(wrapper);
      const email = wrapper.find('#email');
      email.simulate('change', { target: { name: 'email', value: '' } });
      email.update();
      const password = wrapper.find('#Password');
      password.simulate('change', { target: { name: 'password', value: '' } });
      password.update();
      const form = wrapper.find('form');
      form.simulate('submit', { preventDefault: () => {} });
    })
    it.skip('should not submit with Invalid email',()=>{
      const wrapper = mount(<Provider store={store}><Router><Login /></Router></Provider>);
      const email = wrapper.find('#email');
      email.simulate('change', { target: { name: 'email', value: 'elysee' } });
      const form = wrapper.find('form');
      form.simulate('submit', { preventDefault: () => {} });
    })
    it.skip('should display an error when no value is input', () => {
      const wrapper = mount(<Router><Signin /></Router>);
      wrapper.find('form').simulate('submit');
      expect(wrapper.state().formErrors).to.have.length(1);
    });
    if('Top Left Nav should render correclty',()=>{
      const wrapper = renderer.create(<Provider store={store}><Router><TopLeftNav /></Router></Provider>).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  })

