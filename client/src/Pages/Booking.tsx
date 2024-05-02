import { useQuery } from "react-query";
import * as apiClient from "../Hooks/api-client";
import BookingForm from "../forms/BookingForm/BookingForm";
import { useSearchContext } from "../context/SearchContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingDetails from "../components/BookingDetails";


const Booking = () => {
    const search = useSearchContext()
    const { hotelId } = useParams();

    const [numberOfNights, setNumberOfNights] = useState<number>(1);
    useEffect(()=> {
        if(search.checkIn && search.checkOut) {
            const night = Math.abs(search.checkOut.getTime() - search.checkIn.getTime()/1000*60*60*24)
            setNumberOfNights(Math.ceil(night))
        }
    }, [search.checkIn, search.checkOut])
    const { data: hotel } = useQuery("", ()=>apiClient.fetchMyHotelById(hotelId as string), {
        enabled: !!hotelId
    })
    const {data: currentUser } = useQuery("fetchCurrentUser", apiClient.fetchCurrentUser)

  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <div className="bg-green-200">BOOKING DETAILS SUMMARY</div>
      <BookingDetails 
        checkIn={search.checkIn}
        checkOut={search.checkOut}
        hotel={hotel}
        numberOfNights={numberOfNights}
        adult={search.adultCount}
        childCount={search.childCount}
      />
      {currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  )
}

export default Booking;
