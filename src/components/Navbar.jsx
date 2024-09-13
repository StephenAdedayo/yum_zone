import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GoSun } from 'react-icons/go'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'


// Data for language and user dropdowns
const lang = [
  { label: 'English', to: "" },
  { label: 'Spanish', to: "" },
  { label: 'Chinese', to: "" }
]

const joinUs = [
  { label: 'Become a Seller', to: "" },
  { label: 'Become a Delivery Man', to: "" }
]

const userOptions = [
  { label: 'Profile', to: "/profile" },
  { label: 'Orders', to: "/orders" },
  { label: 'Logout', to: "/logout" }
]



const Navbar = () => {
  const logo = "https://res.cloudinary.com/db4ewstgm/image/upload/v1726241208/yumzone_logo_tfnzkz.png"
  return (
    // Site header starts here
    <header className='font-primaryFont'>
      {/* Ribbon Nav */}
      <div className='bg-gray-100 px-[10%]'>
        <div className='md:flex md:justify-between md:items-center w-full mx-auto h-20'>
          {/* Left side of Ribbon Nav */}
          <div>
            <span className='flex gap-2 items-center'>
              {/* Location Icon */}
              <IoLocationSharp className='text-xl text-primaryColor' />
              <p className='text-primaryColor'>Your Location:</p>
              <p>226 Herbert Macaulay Wy, Alagomeji-Yaba, Lagos 10...</p>
              {/* Arrow down Icon */}
              <MdKeyboardArrowDown className='text-3xl' />
            </span>
          </div>
          {/* Right of Ribbon Nav */}
          <div className='flex gap-8 md:gap-24 items-center'>
            <Dropdown label="English" links={lang} style="hover:bg-gray-300" />
            <Dropdown label="Join us" links={joinUs} style="hover:bg-gray-300" />
            <GoSun className='text-4xl' />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className='px-4 md:px-24 mt-8 md:flex md:justify-between md:items-center'>
        {/* Left side nav */}
        <div className='flex items-center'>
          {/* Logo */}
          <div>
            <img src={logo} alt="Yumzone Logo" className='w-20 h-auto w-32' />
          </div>
          {/* Navigation Links */}
          <div className='text-xl flex gap-5 ml-8'>
            <Link to='/'>Home</Link>
            <Link to='/categories'>Categories</Link>
            <Link to='/favourite'>Favourite</Link>
            <Link to='/stores'>Stores</Link>
          </div>
        </div>

        {/* Right side nav */}
        <div className='flex items-center gap-6 mt-4 md:mt-0'>
          {/* Search bar */}
          <div className='relative'>
            <input
              type='text'
              className='border border-gray-300 rounded-full py-2 px-4 w-48 md:w-64 focus:outline-none'
              placeholder='Search...'
            />
            <FiSearch className='absolute top-3 right-4 text-xl text-gray-500' />
          </div>

          {/* Cart icon */}
          <Link to='/cart' className='relative'>
            <FiShoppingCart className='text-3xl' />
            <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>3</span>
          </Link>

          {/* User profile dropdown */}
          <Dropdown label={<FaUserCircle className='text-3xl' />} links={userOptions} style="hover:bg-gray-300" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
