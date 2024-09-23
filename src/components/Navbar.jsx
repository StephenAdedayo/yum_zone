import React, { useState } from 'react'
import { IoLocationSharp, IoMenuOutline } from 'react-icons/io5'
import { MdContentCut, MdFreeCancellation, MdHelpCenter, MdKeyboardArrowDown, MdLanguage, MdLocalShipping, MdOutlineContentCut } from 'react-icons/md'
import { GoSun } from 'react-icons/go'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { FaLocationArrow, FaPeopleArrows, FaShoppingBag, FaSignInAlt, FaUserCircle, FaWallet } from 'react-icons/fa'
import Dropdown from './Dropdown'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Drawer, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { ImProfile } from 'react-icons/im'
import { GrUserWorker } from 'react-icons/gr'
import { BsChatDotsFill, BsShop, BsShopWindow } from 'react-icons/bs'
import { PiShieldStarFill } from 'react-icons/pi'
import { HiReceiptRefund } from 'react-icons/hi'
import { RiCoupon2Fill, RiCouponFill } from 'react-icons/ri'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { useSelector } from 'react-redux'


// Language and User dropdown data
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

const sideNav =[
  {label: 'Profile', to: "/signup", icon: ImProfile  },
  {label: 'My Orders', to: "/orders", icon: FaShoppingBag  },
  {label: 'My address', to: "/address", icon: FaLocationCrosshairs  },
  {label: 'Language', to: "/language", icon: MdLanguage  },
  {label: 'Coupon', to: "/coupon", icon: RiCouponFill  },
  {label: 'Help & Support', to: "/help", icon: MdHelpCenter  },
  {label: 'Lve Chat', to: "/livechat", icon: BsChatDotsFill  },
  {label: 'Refund Policy', to: "/refundpolicy", icon: HiReceiptRefund   },
  {label: 'Cancellation Policy', to: "/cancellation", icon: MdFreeCancellation  },
  {label: 'Shipping Policy', to: "/shippingpolicy", icon: MdLocalShipping   },
  {label: 'Wallet', to: "/", icon: FaWallet   },
  {label: 'Loyalty Points', to: "/loyaltypoints", icon: PiShieldStarFill  },
  {label: 'Refer & Earn', to: "/referearn", icon: FaPeopleArrows  },
  {label: 'Join a Restaurant', to: "/joinrestaurant", icon: BsShop  },
  {label: 'Join as a Delivery Man', to: "/deliveryman", icon: GrUserWorker  },
  {label: 'Sign In', to: "/signin", icon: FaSignInAlt   },
]

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')  // State for search input
  const [cartItems, setCartItems] = useState(3)       // Dynamic cart state
  const navigate = useNavigate()                      // Hook for navigation
  const [isMenuOpen, setIsMenuOpen ] = useState(false)
  const {amount = 0} = useSelector(state => state.cart)

  const logo = "https://res.cloudinary.com/db4ewstgm/image/upload/v1726241208/yumzone_logo_tfnzkz.png"

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Handle search on 'Enter' key press
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery.trim()}`)
    }
  }

  return (
    <header className='font-primaryFont'>
      {/* Ribbon Nav */}
      <div className='bg-gray-100 px-[10%]'>
        <div className='md:flex md:justify-between md:items-center w-full mx-auto min-h-20'>
          {/* Left side of Ribbon Nav */}
          <div>
            <span className='flex gap-2 items-center'>
              <IoLocationSharp className='text-xl text-primaryColor' />
              <p className='text-primaryColor'>Your Location:</p>
              <p>226 Herbert Macaulay Wy, Alagomeji-Yaba, Lagos...</p>
              <MdKeyboardArrowDown className='text-3xl' />
            </span>
          </div>
          {/* Right side of Ribbon Nav */}
          <div className='flex gap-8 md:gap-24 items-center'>
            <Dropdown label="English" links={lang} style="hover:bg-gray-300" />
            <Dropdown label="Joinus" links={joinUs} style="hover:bg-gray-300" />
            <GoSun className='text-4xl' />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className='px-4 md:px-24 mt-8 md:flex md:justify-between md:items-center relative '>
        {/* Left side nav */}
        <div className='flex flex-col md:flex-row items-center'>
          {/* Logo */}
          <div className='my-2 md:my-auto'>
            <Link to='/'><img src={logo} alt="Yumzone Logo" className='w-32 h-auto ' /></Link>
          </div>
          {/* Navigation Links */}
          <div className='text-xl flex gap-5 ml-8'>
            <Link to='/' className='hover:text-primaryColor '>Home</Link>
            <Link to='/categories' className='hover:text-primaryColor '>Categories</Link>
            <Link to='/favorite' className='hover:text-primaryColor '>Favourite</Link>
            <Link to='/stores' className='hover:text-primaryColor '>Stores</Link>
          </div>
        </div>

        {/* Right side nav */}
        <div className='flex  justify-center items-center gap-6 mt-4 md:mt-0 max-w-fit '>
          {/* Search bar */}
          <div className='relative'>
            <input
              type='text'
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              className='border border-gray-300 rounded-full py-2 px-4 w-48 md:w-64 focus:outline-none'
              placeholder='Search...'
            />
            <FiSearch className='absolute top-3 right-4 text-xl text-gray-500' />
          </div>

          {/* Cart icon */}
          <Link to='/cart' className='relative'>
            <FiShoppingCart className='text-3xl' />
            {cartItems > 0 && (
              <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {amount}
              </span>
            )}
          </Link>

          {/* User profile dropdown */}
          <Dropdown label={<FaUserCircle className='text-3xl' />} links={userOptions} style="hover:bg-gray-300" />

          {/* Menu Icon */}
          <div className='absolute  top-0 right-0 md:relative px-5'>
              <IoMenuOutline onClick={()=>setIsMenuOpen(true)} className='text-5xl ' />
          </div>
          
            {/* mui menu drawer */}
            <Drawer anchor="right" open={isMenuOpen} onClose={()=>setIsMenuOpen(false)}>
              <div className='w-[400px]'>
                <span className='h-28 bg-primaryColor bg-opacity-5 w-full flex items-center justify-between p-10 mb-10 pt-28'>
                    <h1 className='text-4xl font-semibold'>Menu</h1>
                    <button onClick={()=>setIsMenuOpen(false)} className='text-4xl font-semibold '>x</button>
                </span>
                {/* Link list starts here */}
                <MenuList className='flex flex-col gap-5' onClick={()=>setIsMenuOpen(false)}>
                  {
                    sideNav.map((item, index)=>(
                      // link
                      <Link to={item.to} key={index} >
                    <MenuItem><ListItemIcon>
                      {/* icon here */}
                        <item.icon className='text-primaryColor text-4xl mx-3' />
                      </ListItemIcon>
                      <ListItemText>
                      {/* text here */}
                      <p className='text-lg'>{item.label}</p>
                      </ListItemText>
                    </MenuItem></Link>

                    ))
                  }
                </MenuList>

              </div>
            </Drawer>
        </div>
       
      </nav>
    </header>
  )
}

export default Navbar
