import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Profile extends Component {

    render() {

        const rowClass =
            "flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none"
        const leftClass = "w-full sm:w-1/3 font-medium text-center sm:text-left font-normal text-gray-600 text-sm"
        const rightClass = "flex-1 text-center sm:text-left font-normal text-gray-600 text-sm"

        return (

            <div className=" flex justify-center mt-16 ">

                <div className="rounded overflow-hidden shadow-lg my-2 w-full md:w-5/12  bg-white ">

                    <div className="flex justify-center mt-5">
                        <img className=" w-44 h-44 rounded-full " src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Sunset in the mountains " />
                    </div>

                    <div className="px-6 py-4 w-full">
                        <div className="w-full">
                            <h3 className="font-normal text-center text-gray-600 text-xl">User Details</h3>
                            <div className="mt-4">
                                <div className={rowClass}>
                                    <span className={leftClass}>First name</span>
                                    <span className={rightClass}>Ukundimana</span>
                                </div>
                                <div className={rowClass}>
                                    <span className={leftClass}>Last name</span>
                                    <span className={rightClass}>Faustin</span>
                                </div>
                                <div className={rowClass}>
                                    <span className={leftClass}>Preferred Language</span>
                                    <span className={rightClass}>English</span>
                                </div>
                                <div className={rowClass}>
                                    <span className={leftClass}>Office Address</span>
                                    <span className={rightClass}>Kicukiro, Kigali</span>
                                </div>
                                <div className={rowClass}>
                                    <span className={leftClass}>Role</span>
                                    <span className={rightClass}>requester</span>
                                </div>

                                <div className={rowClass}>
                                    <span className={leftClass}>Manager</span>
                                    <span className={rightClass}>Muhire</span>
                                </div>
                                <div className={rowClass}>
                                    <span className={leftClass}>Email</span>
                                    <span className={rightClass}>fukundimana@gmail.com</span>
                                </div>

                                <div className="flex justify-center">

                                    <button className="bg-white hover:bg-gray-100  py-1 w-full border border-gray-400 rounded shadow font-normal text-gray-600 text-sm">
                                        <Link to="/profile/edit">
                                            Change Profile
                                        </Link>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>

        )
    }
}

export default Profile;