import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleToggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg"
          alt="LoginImg"
        />
      </div>
      <form className=" absolute p-12  w-4/12 my-36 mx-auto right-0 left-0   bg-black/80 rounded-md">
        <p className="text-white font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 px-2 my-4 w-full rounded-lg text-gray-50 outline-gray-50 border  border-gray-50"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 px-2 my-4 w-full rounded-lg text-gray-50 outline-gray-50 border  border-gray-50"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4   w-full rounded-lg  text-gray-50  outline-gray-50  border  border-gray-50"
        />
        <button
          type="submit"
          className="p-4 my-4 bg-red-800 rounded-lg text-white font-bold  w-full cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white my-4">
          {isSignInForm ? "New to Netflix? " : "Already Registered "}
          <span
            className="font-bold cursor-pointer"
            onClick={handleToggleSignUpForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
