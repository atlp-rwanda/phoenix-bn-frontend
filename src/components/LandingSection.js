import React, { Component } from 'react';
import HouseImage from '../images/Rectangle1.png';
import Curve from '../images/curved.png';
import { connect } from 'react-redux';
export class LandingSection extends Component {
  render() {
    return (
      <div>
      {this.props.auth.isLoggedIn?' ':
      <div className="w-screen h-screen">
      <div className="w-full h-screen relative">
        <img src={HouseImage} alt="" className="h-full w-full" />
        <div className="absolute w-full h-full top-0 left-0 flex items-center">
          <div id="curve" className="sm:w-8/12 h-full relative">
            <img src={Curve} alt="" className="h-max-97 w-full" />
            <div id="text-content" className="absolute space-y-6 flex pl-5 sm:pl-20 font-Sansation font-bold text-white  left-0 border-box top-0 h-max-97 w-full mt-52">
              <div className="space-y-2">
                <p className="text-4xl">Book early save more</p>

                <div className="relative">
                  <p className="text-lg">Bare foot is a travel and accomodattion website for nomads.</p>
                  <p className="pb-10 text-lg" id="hide">We make your travel experience more wonderful with our incomperable services</p>
                  <button type="button" className="inline-block px-6 py-2 text-sm font-bold leading-6 text-center text-white uppercase transition bg-green-500 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {auth:state.auth}
}
export default connect(mapStateToProps) (LandingSection)