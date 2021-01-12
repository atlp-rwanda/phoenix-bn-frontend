import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Profile extends Component {

    render() {
        return (
            <div className="bg-white rounded-lg md:flex p-6 border-3 m-5 md:mx-56 mt-20 pl-12">
                <img className="mx-auto rounded-full h-16 w-16 md:h-24 md:w-24 md:mx-0 md:mr-6" src="../images/image.jpg" alt="" />
                <div className="pr-11">
                    <h2 className=" flex space-between text-sm"> <div className=" font-medium">Names:</div> <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"></input> </h2>
                    <div className="text-sm flex"><div className=" font-medium">Language:</div> <div className=" pl-1"><input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"></input></div></div>
                    <div className="text-sm flex"><div className=" font-medium">Office Address:</div> <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"></input></div>
                    <div className="text-sm flex"><div className=" font-medium">Manager:</div> <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"></input></div>
                    <div className="text-sm flex"><div className=" font-medium">Email:</div> <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"></input></div>
                </div>
                <div className="inline-flex items-center">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-1 px-2 rounded inline-flex items-center">
                        <Link to="/profile/edit">
                            <span>Update Profile</span>
                        </Link>
                    </button>
                </div>
            </div>



        )
    }
}

export default Profile;