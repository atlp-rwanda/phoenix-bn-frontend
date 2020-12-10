import React, {Component} from 'react';

class Navigation extends Component{
 
   toggleMenu=(e)=>{
      let toggleNavStatus=false;
      let getSideBar=document.getElementById("navigation");
        if (getSideBar.style.display === "hidden") { 
            getSideBar.style.display = "visible"; 
        } else { 
            getSideBar.style.display = "hidden"; 
        } 

    }
render(){
   return(
      <div>
      <nav className="flex items-center bg-gray-50 p-3">
      <a href="/home">
      <span className="text-2xl text-black font-bold tracking-wide block font-Sansation">BareFoot</span></a>
      <button onClick={this.toggleMenu} className="nav-taggler text-xl text-black inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto" data-target="#navigation"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
      <div className="hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:mr-8 flex flex-col">
      <a href="home" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:bg-gray-200 hover:text-grey text-xl"><span>Home</span></a>
      <a href="home" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:bg-gray-200 hover:text-grey text-xl"><span>Guest</span></a>
      <a href="home" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:bg-gray-200 hover:text-grey text-xl"><span>House</span></a>
      </div>
      </div>
      </nav>
      </div>
         );
}
  
}

export default Navigation;