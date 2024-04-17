import React, { FormEvent, useState } from 'react';
import { useSearchContext } from '../context/SearchContext';
import { MdTravelExplore } from "react-icons/md";
import  DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const Searchbar = () => { 
    const search = useSearchContext();

    const [destination, setDestination] = useState<string>(search.destination)
    const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
    const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
    const [adultCount, setAdultCount] = useState<number>(search.adultCount);
    const [childCount, setChildCount] = useState<number>(search.childCount);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        search.saveSearchValues(
            destination,
            checkIn,
            checkOut,
            adultCount,
            childCount
        );
    };
const minDate= new Date();
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() + 1)
  return (
    <form onSubmit={handleSubmit}
        className='-mt-8 p-3 bg-orange-400 rounded shadow-md grid grid-cols-2 
            lg:grid-cols-3 2xl:grid-cols-5 
            items-center gap-4'
    >
        <div className="flex flex-row items-center flex-1 bg-white p-2">
            <MdTravelExplore  size={25} className='mr-2' />
            <input 
                placeholder='Where are you going?'
                className='text-md w-full focus:outline-none'
                value={destination}
                onChange={(e)=> setDestination(e.target.value)}
            />
        </div>
        <div className="flex bg-white px-2 py-1 gap-2">
            <label className="flex items-center">
                Adults: 
                <input 
                    className='w-full p-1 focus:outline-none font-bold'
                    type='number'
                    min={1}
                    max={20}
                    value={adultCount}
                    onChange={(e)=>setAdultCount(parseInt(e.target.value))}
                />
            </label>
            <label className="flex items-center">
                Children: 
                <input 
                    className='w-full p-1 focus:outline-none font-bold'
                    type='number'
                    min={1}
                    max={20}
                    value={childCount}
                    onChange={(e)=>setChildCount(parseInt(e.target.value))}
                />
            </label>
        </div>
        <div>
            <DatePicker 
                selected={checkIn}
                onChange={(date)=>setCheckIn( date as Date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText='Check-in Date'
                className='min-w-full bg-white p-2 focus:outline-none'
            />
        </div>
        <div>
            <DatePicker 
                selected={checkOut}
                onChange={(date)=>setCheckOut( date as Date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText='Check-in Date'
                className='min-w-full bg-white p-2 focus:outline-none'
                wrapperClassName='min-w-full'
            />
        </div>
        <div className="flex gap-1">
            <button className="w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500">

            </button>
            <button className="w-1/3 bg-red-600 text-white h-full p-2 font-bold text-xl hover:bg-red-500">
                Clear
            </button>
        </div>
    </form>
  )
}

export default Searchbar;