import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export default function Loginpage( { setIsLoggedIn } ) {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        // Handle login logic here
        
        e.preventDefault();
         setIsLoggedIn(true);
         toast.success("Login successful!");
        navigate(redirectPath, { replace: true });
      }
  return (
    <div>
     <form className="mx-auto max-w-md rounded-lg
      bg-white p-8 shadow-md" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
        <input
          type="password"
          placeholder="Password"
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"  
        />

        <button
          type="submit"
          className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
         
        >
          Login
        </button>
      </form>
    </div>
  )
}
