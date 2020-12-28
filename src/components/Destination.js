import React from 'react';
import meditate from '../images/meditate.jpg'
import river from '../images/river.jpg'
import china from '../images/china.jpg'
const DestinationRecomended=()=>{
   return(
    <section className="preMain">
    <div className="main">
    <h1 className="p-10">OUR MOST POPULAR DESTINATIONS</h1>
    <ul className="cards">
      
    <li className="cards_item">
    <div className="card2">
      <div className="card_image"><img src={meditate} /></div>
      <div className="card_content">
        <h2 className="card_title">Uganda national forest</h2>
        <p className="card_text">The one of the solution to stress is to meditate and this forest is the right place</p>
        <button className="btn card_btn">Create trip request</button>
      </div>
    </div>
  </li>

      <li className="cards_item">
        <div className="card2">
          <div className="card_image"><img src={china} /></div>
          <div className="card_content">
            <h2 className="card_title">Thausand hills lodje</h2>
            <p className="card_text">This is unbiliveable lodge located in Rwanda volcanos is the best place you can stay while visiting volcanos</p>
            <button className="btn card_btn">Create trip request</button>
          </div>
        </div>
      </li>
      
      <li className="cards_item">
        <div className="card2">
          <div className="card_image"><img src={river} /></div>
          <div className="card_content">
            <h2 className="card_title">Congo River</h2>
            <p className="card_text">Congo River, river in west-central Africa.it is the continent's second longest river, after the Nile</p>
            <button className="btn card_btn">create trip request</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </section>
   );
}
export default DestinationRecomended;