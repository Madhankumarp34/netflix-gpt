import React from 'react'

const SignUp = () => {
  return (
    <div>
      <form className=" absolute p-12  w-4/12 my-36 mx-auto right-0 left-0   bg-black/80 rounded-md">
        <p className="text-white font-bold text-3xl my-4">Sign Up</p>
         <input
          type="text"
          placeholder="Your Name"
          className="p-4 px-2 my-4 w-full rounded-lg text-gray-50 outline-gray-50 border  border-gray-50"
        />
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
          Sign In
        </button>
        <p className="text-white my-4">Already Registered? <span className="font-bold cursor-pointer">Login now now.</span></p>
      </form>
    </div>
  )
}

export default SignUp
