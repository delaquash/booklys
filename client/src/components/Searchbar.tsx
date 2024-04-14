import React, { FormEvent, useState } from 'react'
import { useSearchContext } from '../context/SearchContext'

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

  return (
    <form onSubmit={handleSubmit}
        className='-mt-8 p-3 bg-orange-400 rounded shadow-md grid grid-cols-2 
            lg:grid-cols-3 2xl:grid-cols-5 
            items-center gap-4'
    >

    </form>
  )
}

export default Searchbar