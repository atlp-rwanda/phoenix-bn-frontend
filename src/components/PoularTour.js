import React from 'react';
import '../styles/PopularTour.css';
import accommodation2 from '../images/accommodation.jpg';
import accommodation6 from '../images/accommodation6.jpg';
import accommodation4 from '../images/accommodation4.jpg';

const PopularTour = () => (
  <section className="flexBody">
    <h2 className="text-center p-10">EXCITING ACCOMMODATION FOR EXCELLENT PEOPLE</h2>
    <div className="container">
      <div className="card">
        <div className="imgBox">
          <img alt="" src={accommodation2} />
        </div>
        <div className="content">
          <h2>Five star hotel</h2>
          <p className="p-0">This is the one of atractive hotel in Casablanca/Maroco</p>
          <button type="button" className="bg-green-600 hover:bg-blue text-blue-dark font-semibold text-white py-2 px-4 border border-blue hover:border-transparent  rounded">
            Book Now
          </button>

        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img alt="" src={accommodation6} />
        </div>
        <div className="content">
          <h2><b>Amashyuza</b></h2>
          <p className="p-0">This is the natural boil woter located in Rubavu/Rwanda</p>
          <button type="button" className="bg-green-600 hover:bg-blue text-blue-dark font-semibold text-white py-2 px-4 border border-blue hover:border-transparent  rounded">
            <b>Book Now</b>
          </button>

        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img alt="" src={accommodation4} />
        </div>
        <div className="content">
          <h1><b>Sky view hotel</b></h1>
          <p className="content-p">
            This is capital city of Kenya it is attractive for every one in different status
          </p>
          <button type="button" className="bg-green-600 hover:bg-blue text-blue-dark font-semibold text-white py-2 px-4 border border-blue hover:border-transparent  rounded">
            Book Now
          </button>

        </div>
      </div>
    </div>
  </section>
);
export default PopularTour;
