import React from 'react';
import { HotelType } from '../../types/dataTypes';
import { AiFillStar } from "react-icons/ai"

type SearchResultProps = {
    hotel: HotelType
}

const SearchResultCard = ({hotel}:SearchResultProps) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg">
        <div className="w-full h-[300px]">
          <img 
              className='object-cover object-center w-full h-full'
              src={hotel.imageUrls[0]}
          />
        </div>
        <div className="grid grid-rows-[1fr_2fr_1fr]">
            <div>
              <div className="flex items-center">
                  <span className="flex">
                    {Array.from({length: hotel.starRating }).map(()=>(
                      <AiFillStar className='fill-yellow-400'/>
                    ))}
                  </span>
                  <span className="text-sm ml-1">
                    {hotel.type}
                  </span>
              </div>
              <h2 className="text-2xl font-bold cursor-pointer">{hotel.name}</h2>
            </div>
            <div>
              <div className="line-clamp-4">{hotel.description}</div>
            </div>
            <div className="grid grid-cols-2 items-end whitespace-nowrap">
              <div className="flex gap-1 items-center">
                    {hotel.facilities.splice(0,3).map((facility, index)=> (
                      <span className="bg-slate-300 p-2 rounded-lg font-bold text-xs whitespace-nowrap">
                          {facility}
                      </span>
                    ))}
                    <span className="text-sm">
                      {hotel.facilities.length > 3 && 
                        `+${hotel.facilities.length - 3} more`
                      }
                    </span>
              </div>
            </div>
        </div>
    </div>
  )
}


// {Array.from({length: hotel.starRating }).map(()=>(
//   <AiFillStar className='fill-yellow-400'/>
// ))}


export default SearchResultCard