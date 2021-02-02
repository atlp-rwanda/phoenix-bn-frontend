import React, { Component } from 'react'


export class CreateAccommodation extends Component {
   
    render() {
        return (
            
<label class="block">    
  <span class="text-gray-700 font-bold md:text-lg font-Sansation">Name</span>
  <input type="name" class="form-input mt-1 block w-full font-bold md:text-lg font-Sansation border-2 border-grey-700" placeholder="Name..."></input>
  <span class="text-gray-700 font-bold md:text-lg font-Sansation">Available Space</span>
  <input type="number" class="form-input mt-1 block w-full font-bold md:text-lg font-Sansation border-2 border-grey-700" placeholder="Available Space..."></input>
  <span class="text-gray-700 font-bold md:text-lg font-Sansation">Cost</span>
  <input type="Text" class="form-input mt-1 block w-full font-bold md:text-lg font-Sansation border-2 border-grey-700" placeholder="Cost..."></input>
  <span class="text-gray-700 font-bold md:text-lg font-Sansation">Currency</span>
  <select class="form-input mt-1 block w-full font-bold md:text-lg font-Sansation border-2 border-grey-700">
  <option class='py-3 font-bold md:text-lg font-Sansation'selected disabled>Select currency...</option>
    <option class="py-1 font-bold md:text-lg font-Sansation">RWF</option>
    <option class="py-1 font-bold md:text-lg font-Sansation">UGX</option>
    <option class="py-1 font-bold md:text-lg font-Sansation">KSH</option>
    <option class="py-1 font-bold md:text-lg font-Sansation">TSH</option>
    <option class="py-1 font-bold md:text-lg font-Sansation">USD</option>
    <option class="py-1 font-bold md:text-lg font-Sansation">POUND</option>
</select>
<span class="text-gray-700 font-bold md:text-lg font-Sansation">Location</span>
  <select class="form-input mt-1 block w-full font-bold md:text-lg font-Sansation border-2 border-grey-700">
  <option class='py-3 font-bold md:text-lg font-Sansation 'selected disabled>Select location...</option>
    <option class="py-1">Rwanda</option>
    <option class="py-1">Uganda</option>
    <option class="py-1">Kenya</option>
    <option class="py-1">Tanzania</option>
    <option class="py-1">Democratic Republic of Congo</option>
    <option class="py-1">Burundi</option>
    <option class="py-1">Egypt</option>
    <option class="py-1">Germany</option>
    <option class="py-1">Italy</option>
    <option class="py-1">England</option>
    <option class="py-1">Israel</option>
    <option class="py-1">Singapore</option>
    <option class="py-1">China</option>
    <option class="py-1">Malaysia</option>
    <option class="py-1">Dubai</option>
    <option class="py-1">Qatar</option>
    <option class="py-1">China</option>
</select>
<span class="text-gray-700 font-bold md:text-lg font-Sansation">Description</span>
<textarea class="rounded-lg resize-none w-full h-full font-bold md:text-lg font-Sansation border-2 border-grey-700"></textarea>
<span class="text-gray-700 font-bold md:text-lg font-Sansation">Amenities</span>
  <input type="name" class="form-input mt-1 block w-full font-bold md:text-lg font-Sansation border-2 border-grey-700" placeholder="Amenities..."></input>
  <button class="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded font-bold md:text-lg font-Sansation mt-8 mx--8">
  Create Accommodation
</button>
        
</label>

        
             
        )
    }
}

export default CreateAccommodation;