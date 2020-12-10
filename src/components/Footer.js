import React, {Fragment} from 'react';
import { ImFacebook,ImTwitter,ImInstagram } from "react-icons/im";

const Footer=()=>{
   return(
<Fragment>
    <footer className="bg-footer-bg relative bg-no-repeat lg:bg-center p-0 mb-0 bg-top-right">
    <div className="flex-1 max-w-8xl max-auto p-10">
    <ul className="md:grid sm:grid-flow-col mt-30 grid-col-1 gap-4 md:grid-cols-2 md:gap-8 grid-flow-col-dense sm:auto-cols-min mb-2">
    <li className="rounded-lg shadow-xl flex-col md:p-12"><div className="max-h-full">
    <h1 className="text-gray-200 font-bold text-2xl font-Sansation">BareFoot</h1><p className="max-h-full p-1 pt-5 mb-2  text-gray-200 font-bold md:text-xl font-Sansation">Bare foot is atravela nd accomodattion website for nomads we make your travel experience more woenderful with our incomperable services.</p>
    </div></li>
    <li className="rounded-lg shadow-xl md:mr-12 md:p-12"><div className="max-h-full">
    <h1 className="text-gray-200 font-bold text-2xl font-Sansation">Contact</h1><p className="text-gray-200 pt-5 font-bold md:text-xl font-Sansation">Barefoot customer services<br /> +250785855328<br />barefoot@gmail.com <br /><i class="fab fa-whatsapp"></i></p>
    <div className="flex mt-4 ml-16">
    <a href="https://twitter.com/BarefootCollege"><ImTwitter className="text-white mr-4 text-4xl mb-5" /></a> 
    <a href="https://web.facebook.com/groups/217860805077474"><ImFacebook className="text-white mr-4 text-4xl mb-5" /></a> 
    <a href="https://www.instagram.com/barefoot_nomad_/"><ImInstagram className="text-white mr-4 text-4xl mb-5" /></a> 
    </div>
    </div></li>
    </ul>
    </div>
    </footer>
</Fragment>
   );
}

export default Footer;