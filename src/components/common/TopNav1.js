import React from 'react';
import { Link } from 'react-router-dom';

class TopNav1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
        };
    }

    render() {
        const { isHidden } = this.state;
        return (
            <div className="absolute w-full h-auto z-10">
                <nav className="flex justify-between bg-white w-full md:w-topNav  p-3 md:py-3 md:pl-4  md:pr-28 h-full">
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


                            </ul>

                        </section>
                    </div>
                </nav>

                <div className={isHidden ? 'hidden' : 'block'}>

                    <section className="text-center z-0 lg:items-center bg-white lg:w-auto">
                        <ul className="lg:hidden items-center justify-between text-base text-black font-bold pt-4 lg:pt-0 mb-4">


                        </ul>

                    </section>
                </div>

            </div>
        );
    }
}

export default TopNav1;
