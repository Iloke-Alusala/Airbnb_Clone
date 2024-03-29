import React, { useState } from 'react'
import Image from "next/image"
import { 
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon
} 
from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import Search from '@/pages/search';

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate ] = useState(new Date());
  const [endDate, setEndDate ] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) =>{
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () =>{
    setSearchInput("")
  }
   
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }

  const search = () => {
    router.push({
      pathname : "/search",
      query : {
        location : searchInput,
        startDate : startDate.toISOString(),
        endDate : endDate.toISOString(),
        noOfGuests : noOfGuests,
      }
    });
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-18"> 
        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/qd3"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "left"
            }} />
        </div>
        {/* Middle - Search */}
        <div className="flex items-center md:border-2 
        rounded-full md:shadow-sm">

          <input 
          value = {searchInput}
          onChange={(e) => {setSearchInput(e.target.value)}}
          className="pl-5 bg-transparent outline-none flex-grow 
          text-gray-600 text-sm placeholder-gray400" type="text" 
          placeholder={placeholder || 'Start your search'}/>

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
        {
          searchInput && (
            <div className='flex flex-col col-span-3 mx-auto '>
              <DateRangePicker
              ranges = {[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
              />

              <div className='flex items-center border-b mb-4'>
                <h2 className='text-2xl font-semibold flex-grow
                '>Number of Guests</h2>
                <UsersIcon className='h-5' />
                <input 
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number" 
                min={1}
                className='w-12 pl-2 text-lg outline-none text-red-400'/>
              </div>
              <div className='flex'>
                <button className='flex-grow text-gray-500'
                onClick={resetInput}
                >Cancel</button>
                <button className='flex-grow text-red-400'
                onClick={search}>Search</button>
              </div>

            </div>
          )
        }
    </header>
  );
}

export default Header