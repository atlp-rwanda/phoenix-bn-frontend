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
                    <div className="px-6 py-4 w-full">
                        <div className="w-full">
                            <div className="mt-4">
                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600 ">First name</label>
                                    <div>
                                        <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="First name" type="text" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Last name</label>
                                    <div>
                                        <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Last name" type="text" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Preferred Language</label>
                                    <div>
                                        <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Preferred Language" type="text" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Office Address</label>
                                    <div>
                                        <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Office Address" type="text" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Manager</label>
                                    <div>
                                        <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Manager" type="text" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Email</label>
                                    <div>
                                        <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Email" type="text" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Role</label>
                                    <div>
                                        <input class="w-full px-1 py-1 mb-1 border-2 border-gray-400 rounded focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Role" type="text" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Profile Picture</label>
                                    <div>
                                        <input type="file"
                                            id="avatar" name="avatar"
                                            accept="image/png, image/jpeg"></input>
                                    </div>
                                </div>




                                <div className="flex justify-center">
                                    <button className="bg-white hover:bg-gray-100 px-1 py-1.5 w-full border-2 border-gray-400 rounded shadow font-normal text-gray-600 text-sm">
                                        <Link to="/profile/edit">
                                            Update Profile
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