import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Profile extends Component {

    render() {
        return (

            <div className="flex justify-center">
                <div className="max-w-md w-full lg:flex mt-20">

                    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                        <div className="flex items-center ">
                            <img className="w-24 h-24 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                            <div className="text-sm">
                                <h2 className=" flex space-between text-sm"><div className=" pl-1 font-normal   text-gray-700 text-xl">Ukundimana</div> <div className=" pl-1 font-normal   text-gray-700 text-xl"> Faustin</div> </h2>
                                <div className=" pl-5 ">
                                    <div className="text-sm flex"><div className=" font-normal   text-gray-600 font-medium text-xs">Language:</div> <div className=" pl-1 font-normal   text-gray-600 text-xs">English</div></div>
                                    <div className="text-sm flex"><div className=" font-normal   text-gray-600 font-medium text-xs"> Address:</div> <div className=" pl-1 font-normal   text-gray-600 text-xs">Kicukiro, Kigali</div></div>
                                    <div className="text-sm flex"><div className=" font-normal   text-gray-600 font-medium text-xs">Manager:</div> <div className=" pl-1 font-normal   text-gray-600 text-xs">Muhire</div></div>
                                    <div className="text-sm flex"><div className=" font-normal   text-gray-600 font-medium text-xs">Email:</div> <div className=" pl-1 font-normal   text-gray-600 text-xs">fukundimana@gmail.com</div></div>
                                </div>

                                <button className=" ml-10 mt-2 bg-gray-200 hover:bg-gray-300 font-medium py-1 px-2 rounded inline-flex items-center">
                                    <Link to="/profile/edit">
                                        <span className="font-normal text-gray-700 text-sm">Change Profile</span>
                                    </Link>
                                </button>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
        )
    }
}

export default Profile;