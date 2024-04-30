import React from "react";
import * as apiClient from "../Hooks/api-client";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForms from "../forms/GuestInfoForms/GuestInfoForms";


const Details = () => {
  const { hotelId } = useParams();
  const { data: hotel } = useQuery(
    "fetchSingleHotelById",
    () => apiClient.fetchSingleHotelById(hotelId as string),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }

  return (
    <div className="space-y-6">
      <div>
        <span className="flex">
          {Array.from({ length: hotel.starRating }).map(() => (
            <AiFillStar className="fill-yellow-500" />
          ))}
        </span>
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {hotel.imageUrls.map((image) => (
          <div className="h-[300px]" key={image}>
            <img
              src={image}
              alt={hotel.name}
              className="rounded-md w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
        {hotel.facilities.map((facility) => (
          <div key={facility} className="border border-slate-300 rounded-sm p-3">
            {facility}
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-4">
    <div className="whitespace-pre-line">{hotel.description}</div>
    <div className="h-fit">
      <GuestInfoForms
        pricePerNight={hotel.pricePerNight}
        hotelId={hotel._id}
      />
    </div>
  </div>
</div>
  );
};

export default Details;
