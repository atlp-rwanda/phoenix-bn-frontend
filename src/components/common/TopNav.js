import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TopLeftNav from '../common/TopLeftNav';
class TopNav extends React.Component {
    state = {
      isHidden: true,
    };

  render() {
    const { isHidden } = this.state;
    return (
      <div className="absolute w-full h-auto z-10">
        <nav className="flex justify-between bg-white w-full md:w-topNav  p-3 md:py-3 md:pl-4  md:pr-28 h-full md:rounded-br-full">
          <Link to="/" className="block">
            <span className="text-2xl text-black font-bold  font-Sansation lg:pl-12 italic">BareFoot</span>
          </Link>
          <button
            type="button"
            onClick={() => {
              this.setState({ isHidden: !isHidden });
            }}
            id="toggle_button"
            className="lg:hidden block btn-submit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
            </svg>
          </button>
          <div className="hidden lg:flex  lg:items-center bg-white lg:w-auto w-full">

            <section>
              <ul className="lg:flex items-center justify-between text-base text-black font-Sansation pt-4 lg:pt-0 ">
                <li>
                  {' '}
                  <Link to="/about" className="py-1 px-5 hover:bg-gray-200 rounded-full">About</Link>
                </li>
                <li>
                  {' '}
                  <Link to="/login" className="py-1 px-5 hover:bg-gray-200 rounded-full">Accomodation</Link>
                </li>
                <li>
                  {' '}
                  <Link to="/help" className="py-1 px-5 hover:bg-gray-200 rounded-full">Help</Link>
                </li>
                <li>
                  {' '}
                  {this.props.auth.isAuthenticated?
                    <TopLeftNav />:
                    <Link to="/login" className="inline-block px-6 py-2 text-sm font-bold leading-6 text-center text-white uppercase transition bg-green-400 rounded-full shadow ripple hover:shadow-lg hover:bg-green-500 focus:outline-none">
                    Login
                  </Link>}
                  
                </li>
              </ul>

            </section>
          </div>
        </nav>

        <div className={isHidden ? 'hidden' : 'block'}>

          <section className="text-center z-0 lg:items-center bg-white lg:w-auto">
            <ul className="lg:hidden items-center justify-between text-base text-black font-bold pt-4 lg:pt-0 mb-4">
              <li className="hover:bg-gray-200">
                {' '}
                <Link to="/about" className="py-1 px-5">About</Link>
              </li>
              <li className="hover:bg-gray-200">
                {' '}
                <Link to="/login" className="py-1 px-5">Accomodation</Link>
              </li>
              <li className="hover:bg-gray-200">
                {' '}
                <Link to="/help" className="py-1 px-5">help</Link>
              </li>
              <li className="hover:bg-gray-200">
                {' '}
                {this.props.auth.isAuthenticated?' ':<Link to="/login" className="py-1 px-5 bg-green-500 rounded-full">
                  Login
                </Link>}
              </li>

            </ul>

          </section>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {auth:state.auth};
}

export default connect(mapStateToProps)(TopNav);
