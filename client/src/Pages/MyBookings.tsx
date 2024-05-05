import * as apiClient from "../Hooks/api-client";
import { useQuery } from "react-query";

const MyBookings = () => {
    const { data: hotel } = useQuery("fetchMyHotelBooking", apiClient.fetchMyHotelBookings)
    if(!hotel || hotel.length){
        return (
            <span>No booking found...</span>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default MyBookings
