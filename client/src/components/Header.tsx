import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import SignOut from './SignOut'


const Header = () => {
    const {isLoggedIn} = useAppContext()
  return (
    <div className='bg-blue-800 py-6'>
        <div className="container mx-auto flex justify-between">
            <span className="text-white text-3xl font-bold tracking-tight">
                <Link to="/">Delabookings.com</Link>
            </span>
            <span className="flex space-x-2">
            {isLoggedIn ? (
                <>
                <Link to="/my-bookings">My Bookings</Link>
                <Link to="/my-hotels">My Hotels</Link>
                <button><SignOut /></button>
                </>
            ):(
                <Link to="/sign-in" className="flex bg-white items-center text-blue-600 px-3 hover:bg-gray-100">
                    Sign In
                </Link>
            )}
            </span>
        </div>
    </div>
  )
}

export default Header