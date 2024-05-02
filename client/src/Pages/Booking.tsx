import { useQuery } from "react-query";
import * as apiClient from "../Hooks/api-client";
import BookingForm from "../forms/BookingForm/BookingForm";
import { useSearchContext } from "../context/SearchContext";
import { useParams } from "react-router-dom";

const Booking = () => {
    const search = useSearchContext()
    const { hotelId } = useParams();

    const { data: hotel } = useQuery("", ()=>apiClient.fetchMyHotelById(hotelId as string), {
        enabled: !!hotelId
    })
    const {data: currentUser } = useQuery("fetchCurrentUser", apiClient.fetchCurrentUser)

  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <div className="bg-green-200">BOOKING DETAILS SUMMARY</div>
      {currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  )
}

export default Booking
