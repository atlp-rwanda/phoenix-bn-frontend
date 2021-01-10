import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Footer from '../components/common/Footer';
import Topnav from '../components/common/TopNav';
import About from '../pages/About';
import Help from '../pages/Help';
import App from '../app';
import LandingPage from '../pages/LandingPage';
import Testimonials from '../components/client';
import LandingSection from '../components/LandingSection';
import DestinationPageContent from '../components/Destination';
import PopularTour from '../components/PoularTour';
import store from '../store';
import { mount } from 'enzyme/build';

describe('It should mount the App Components', () => {
  it('Navbar should render', () => {
    shallow(<App />);
  });
  it('Navbar should render landing Page', () => {
    shallow(<LandingPage />);
  });
  it('Destination should render', () => {
    shallow(<DestinationPageContent />);
  });

  it('Landing section should render', () => {
    shallow(<Provider store={store}><Router><LandingSection /></Router></Provider>);
  });
  it('About section should render', () => {
    shallow(<About />);
  });
  it('Help page should render', () => {
    shallow(<Help />);
  });
  it('Popular tour should render', () => {
    shallow(<PopularTour />);
  });
  it('Testimonials should render', () => {
    shallow(<Testimonials />);
  });
});

describe('Testing Shared Shared Components', () => {
  it('footer should render', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Landing page content should be rendered', () => {
    const tree = renderer.create(<Provider store={store}><Router><Topnav /></Router></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const toggleaRole = jest.fn();

  it('button click should toggle on mobile view ', () => {
    const component = mount(<Provider store={store}><Router><Topnav /></Router></Provider>);
    component
      .find('button#toggle_button')
      .simulate('click');
    expect(toggleaRole).toMatchSnapshot();
  });
});
