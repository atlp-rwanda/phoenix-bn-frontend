import React from 'react';
import '../styles/PopularTour.css';
import tourist1 from '../images/tourist1.jpg';
import kivu from '../images/kivu.jpg';
import paris from '../images/paris.jpg';
const PopularTour=()=>{
   return(
<section className="flexBody">
<h2 className="text-center p-10">EXCITING TOURS FOR EXCELLENT PEOPLE</h2>
<div className="container">
<div className="card">
<div className="imgBox">
<img src={kivu} />
</div>
<div className="content">
<h2>Lac kivu</h2>
<p  className="p-0">This is the one of atractive touristic area located in Rwanda</p>
<button className="bg-indigo-600 hover:bg-blue text-blue-dark font-semibold text-white py-2 px-4 border border-blue hover:border-transparent  rounded">
Create trip request
</button>

</div>
</div>


<div className="card">
<div className="imgBox">
<img src={paris} />
</div>
<div className="content">
<h2>The Eiffel Tower</h2>
<p className="p-0">This is the on of attractive tower located in Paris/France</p>
<button className="bg-indigo-600 hover:bg-blue text-blue-dark font-semibold text-white py-2 px-4 border border-blue hover:border-transparent  rounded">
Create trip request
</button>

</div>
</div>


<div className="card">
<div className="imgBox">
<img src={tourist1} />
</div>
<div className="content">
<h1><b>Kigali city</b></h1>
<p className="content-p">This is capital city of Rwanda it is attractive for business tourist and so on
 </p>
 <button className="bg-indigo-600 hover:bg-blue text-blue-dark font-semibold text-white py-2 px-4 border border-blue hover:border-transparent  rounded">
    Create trip request
</button>

</div>
</div>
</div>
</section>
   );
}
export default PopularTour;