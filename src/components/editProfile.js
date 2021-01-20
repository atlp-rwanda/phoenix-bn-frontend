import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Profile extends Component {

    render() {
        return (

            <div className="flex justify-center">
                <div className="max-w-md w-full lg:flex mt-20">

                    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                        <div className="flex items-center ">
                            <div className="text-sm">

                                <div className=" pl-5 ">
                                    <div className="text-sm flex "><div className=" font-normal   text-gray-600 font-medium text-base">First name:</div>

                                        <div className="mb-3 pt-0 ml-2">
                                            <input type="text" placeholder="First name" className="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm  border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 w-full" />
                                        </div>

                                    </div>

                                    <div className="text-sm flex "><div className=" font-normal   text-gray-600 font-medium text-base">Last name:</div>

                                        <div className="mb-3 pt-0 ml-3">
                                            <input type="text" placeholder="Last name" className="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 w-full" />
                                        </div>

                                    </div>

                                    <div className="text-sm flex "><div className=" font-normal   text-gray-600 font-medium text-base">Language:</div>

                                        <div className="mb-3 pt-0 ml-4">
                                            <input type="text" placeholder="Language" className="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 w-full" />
                                        </div>

                                    </div>
                                    <div className="text-sm flex "><div className=" font-normal   text-gray-600 font-medium text-base">Manager:</div>

                                        <div className="mb-3 pt-0 ml-5">
                                            <input type="text" placeholder="Manager" className="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 w-full" />
                                        </div>

                                    </div>


                                    <div className="text-sm flex "><div className=" font-normal   text-gray-600 font-medium text-base">Email:</div>

                                        <div className="mb-3 pt-0 ml-12">
                                            <input type="text" placeholder="Email" className="px-1 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 w-full" />
                                        </div>

                                    </div>

                                    <div className="text-sm flex "><div className=" font-normal   text-gray-600 font-medium text-base">Image:</div>

                                        <div className="mb-3 pt-0 ml-10 w-10">
                                            <input type="file" name="fileToUpload" id="fileToUpload" placeholder="Email" />
                                        </div>

                                    </div>



                                </div>

                                <button className=" ml-20 mt-2 bg-gray-200 hover:bg-gray-300 font-medium py-1 px-2 rounded inline-flex items-center">
                                    <Link to="/profile/edit">
                                        <span className="font-normal text-gray-700 text-sm">Update Profile</span>
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