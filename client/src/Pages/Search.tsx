import React, { useState } from 'react';
import { useSearchContext } from '../context/SearchContext';
import { useQuery } from 'react-query';
import * as apiClient from ".././Hooks/api-client";
import SearchResultCard from '../components/SearchResultCard';
import Pagination from '../components/Pagination';
import StarRatingFilter from '../components/StarRatingFilter';

const Search = () => {

    const search = useSearchContext();
    const [page, setPage] = useState<number>(1)
    const [selectedStars, setSelectedStars] = useState<string[]>([])

    const searchParams = {
        destination: search.destination,
        checkIn: search.checkIn.toISOString(),
        checkOut: search.checkOut.toISOString(),
        adultCount: search.adultCount.toString(),
        childCount: search.childCount.toString(),
        page: page.toString(),
        stars: selectedStars,
    }

    const { data: hotelData } = useQuery(["searchHotels", searchParams], ()=> 
        apiClient.searchHotels(searchParams)    
    )

    const handleStarChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        const starRating = event?.target.value;

        setSelectedStars((prevStars) =>
            event.target.checked 
            ? [...prevStars, starRating]
            : prevStars.filter((star)=> star !== starRating) 
        )
    }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
            <div className='space-y-5'>
                <h3 className="text-lg font-semibold pb-5 border-b border-slate-500">
                    Filter By:
                </h3>
                {/* Filter conditions */}
                <StarRatingFilter 
                    selectedStars={selectedStars}
                    onChange={handleStarChange}

                />
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                    {hotelData?.pagination.total} Hotels found
                    {search.destination ? `in ${search.destination}` : ""}
                </span>
            </div>
            {hotelData?.data.map((hotel)=>(
                <SearchResultCard key={hotel._id} hotel={hotel}/>
            ))}
            <div>
                <Pagination 
                    page={hotelData?.pagination.page || 1}
                    pages={hotelData?.pagination.pages || 1} 
                    onPageChange={(page)=>setPage(page)}
                />
            </div>
        </div>
    </div>
  )
}

export default Search