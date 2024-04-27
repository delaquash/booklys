import React from 'react';
import * as apiClient from "../Hooks/api-client";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiFillStar } from 'react-icons/ai';

const Details = () => {
    const { hotelId} = useParams();
    const { data: hotel } = useQuery("fetchSingleHotelById", () =>
        apiClient.fetchSingleHotelById(hotelId as string), {
            enabled: !!hotelId
        })

        if(!hotel) {
            return (<></>)
        }
    
  return (
    <div className='space-y-6'>
      <div>
        <span className="flex">
            {Array.from({length: hotel.starRating}).map(()=> (
                <AiFillStar className='fill-yellow-500'/>
            ))}
        </span>
      </div>
    </div>
  )
}

export default Details
