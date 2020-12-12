import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/common/Footer';
import Topnav from '../components/common/TopNav'
import App from '../app'
import { BrowserRouter as Router} from 'react-router-dom'
import {shallow} from 'enzyme'
import LandingPage from '../pages/LandingPage';
import LandingPageContent from '../components/LandingSection'
describe('It should mount the App Components', () => {
  it('Navbar should render', () => {
    shallow(<App />)
  });
  it('Navbar should render landing Page', () => {
    shallow(<LandingPage />)
  });
});

describe('Testing Shared Shared Components', () => {
  it('footer should render', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Navbar should render', () => {
    const tree = renderer.create(<Router><Topnav /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Landing page content should be rendered', () => {
    const tree = renderer.create(<Router><Topnav /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Landing page content should match snapshoot',()=>{
    const tree = renderer.create(<LandingPageContent />).toJSON();
    expect(tree).toMatchSnapshot();
  })

});
