import React from 'react'
import Image from 'next/image'
import { 
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon
} 
from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-18"> 
        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            layout ="fill"
            objectFit='contain'
            objectPosition='left'
           />
        </div>
        {/* Middle - Search */}
        <div className="flex items-center md:border-2 
        rounded-full md:shadow-sm">

          <input className="pl-5 bg-transparent outline-none flex-grow 
          text-gray-600 text-sm placeholder-gray400" type="text" placeholder='Start your search'/>

          <MagnifyingGlassCircleIcon className='hidden md:inline-flex h-14 
          text-red-400 p-2 cursor-pointer'/>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a Host</p>
          <GlobeAltIcon className='text-gray-600 h-6 cursor-pointer'/>
          <div className="flex text-gray-500 items-center border-2 
          p-2 rounded-full justify-center space-x-2">
            <Bars3Icon className="h-6 cursor-pointer"/>
            <UserCircleIcon className="h-6 cursor-pointer"/>
          </div>
        </div>
    </header>
    
  )
}

export default Header