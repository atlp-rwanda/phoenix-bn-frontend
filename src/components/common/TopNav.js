import React from 'react'
import { Link } from 'react-router-dom'
class  TopNav extends React.Component {
    state={
        isHidden:true
    }

render(){
    return (
        <div className='absolute w-full h-auto z-10'>
            <nav className="flex justify-between bg-white w-full md:w-topNav  p-3 md:py-3 md:pl-4  md:pr-28 h-full md:rounded-br-full">
                <Link to="/" className='block'>
                    <span className="text-2xl text-black font-bold  font-Sansation italic">BareFoot</span>
                </Link>
                <button onClick={()=>{
                    this.setState({isHidden:!this.state.isHidden})
                }} id="toggle_button" className="lg:hidden block btn-submit">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg>
                </button>
                <div className="hidden lg:flex  lg:items-center bg-white lg:w-auto w-full">
        
                <section> 
                <ul className="lg:flex items-center justify-between text-base text-black font-bold font-Sansation pt-4 lg:pt-0 ">
                <li className="hover:bg-gray-200"> <Link to='/about' className="py-1 px-5">About</Link></li>
                <li className="hover:bg-gray-200"> <Link to='/login' className="py-1 px-5">Accomodation</Link></li>
                <li className="hover:bg-gray-200"> <Link to='/help' className="py-1 px-5">Help</Link></li>
                <li className="hover:bg-gray-200"> <Link to='/login' className="bg-mainGreen py-1 px-5">
                Login
            </Link></li>
                </ul>
               
                </section>
                </div>
                </nav>  
              
               
        <div className={this.state.isHidden ? 'hidden': 'block'}>
        
        <section className="text-center z-0 lg:items-center bg-white lg:w-auto"> 
        <ul className="lg:hidden items-center justify-between text-base text-black font-bold pt-4 lg:pt-0 mb-4">
        <li className="hover:bg-gray-200"> <Link to='/about' className="py-1 px-5">About</Link></li>
        <li className="hover:bg-gray-200"> <Link to='/login' className="py-1 px-5">Accomodation</Link></li>
        <li className="hover:bg-gray-200"> <Link to='/help' className="py-1 px-5">help</Link></li>
        <li className="hover:bg-gray-200"> <Link to='/login' className="bg-mainGreen py-1 px-5">
        Login
    </Link></li>

        </ul>
       
        </section>
        </div>
       
           
        </div>
    )
}
}

export default TopNav;
