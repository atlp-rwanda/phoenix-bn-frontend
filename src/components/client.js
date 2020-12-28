import React from 'react';
import {ImStarFull,ImStarHalf } from "react-icons/im";
const ClientRecomended=()=>{
   return(
<section>
<div className="wrapper">
<div>
<p className="font-Sansation" id="somePeople">TESTIMONIALS</p></div>
 
  <div className="team">
    <div className="team_member">
      <div className="team_img">
        <img src="https://i.imgur.com/2pGPLrl.png" alt="Team_image" />
      </div>
      <h3>Paul Doe</h3>
      <p className="role">CEO of inyarwanda ltd</p>
<p>This system is very atractive and secure as prominig they have great customer care and also they have team of managers that make sure that you are being satisfyied by their services.</p>
<p className="flex justify-center pt-3 text-blue-400"><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /></p>
    </div>
    <div className="team_member">
      <div className="team_img">
        <img src="https://i.imgur.com/jQj1I8E.png" alt="Team_image" />
      </div>
      <h3>Rosie Meg</h3>
      <p className="role">Banker</p>
      <p>You can not imagine how this system is atractive I am grateful that Berefoot nomad make my trip unforgetable</p>
      <p className="flex justify-center pt-12 text-blue-400"><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /></p>
      </div>
    <div className="team_member">
      <div className="team_img">
        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9lg_1CBuouHmj1cPHsslBexHMQd4Czt3yf-EoApQ=s64-c-mo" className="rounded-full" alt="Team_image" />
      </div>
      <h3>Bizimungu pascal</h3>
      <p className="role">web developer</p>
      <p>Flankly I have never seen before the organized system like this, I am traveller expert because I love travelling I recomend you barefoot in your jurnney.</p>
      <p className="flex justify-center pt-5 text-blue-400"><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /></p>
    </div>
  </div>
</div>


</section>
   );
}
export default ClientRecomended;