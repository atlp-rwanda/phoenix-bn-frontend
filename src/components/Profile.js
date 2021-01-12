import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Profile extends Component {

    render() {
        return (

            <div className="bg-white rounded-lg md:flex p-6 border-3 m-5 md:mx-56 mt-20 pl-12">

                <img className="mx-auto rounded-full h-16 w-16 md:h-24 md:w-24 md:mx-0 md:mr-6" src="../images/image.jpg" alt="" />

                <div className="pr-11">
                    <h2 className=" flex space-between text-sm"> <div className=" font-medium">Names:</div> <div className=" pl-1">Ukundimana</div> <div className=" pl-1"> Faustin</div> </h2>
                    <div className="text-sm flex"><div className=" font-medium">Language:</div> <div className=" pl-1">English</div></div>
                    <div className="text-sm flex"><div className=" font-medium">Office Address:</div> <div className=" pl-1">Kicukiro, Kigali</div></div>
                    <div className="text-sm flex"><div className=" font-medium">Manager:</div> <div className=" pl-1">Muhire</div></div>
                    <div className="text-sm flex"><div className=" font-medium">Email:</div> <div className=" pl-1">fukundimana@gmail.com</div></div>
                </div>

                <div className="inline-flex items-center">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-1 px-2 rounded inline-flex items-center">
                        <Link to="/profile/edit">
                            <span>Edit Profile</span>
                        </Link>
                    </button>
                </div>

            </div>


        )
    }
}

export default Profile;