import React from 'react';
import TextInput from '../form/TextInput';

const Reset = () => (
  <div className="bg-white py-14 px-6 w-full md:w-2/6 my-14  mx-auto space-y-5">
    <p className="text-formColor font-Sansation text-center">PASSWORD REMINDER</p>
    <div className="w-full">
      <h1 className="text-left font-Sansation">Your email address:</h1>
      <form name="resetPwdForm" className="w-full space-y-4">
        <TextInput type="email" />
        <button type="button" id="submitButton" className="bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none">Reset</button>
      </form>
      <div>
        <p id="paragraph" className="text-gray-700 text-center mt-4">
          Don't Have Account?
          <a to="/login"><u>Sign Up</u></a>
        </p>
      </div>
    </div>
  </div>
);

export default Reset;
