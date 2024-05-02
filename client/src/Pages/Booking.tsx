import { useQuery } from "react-query";
import * as apiClient from "../Hooks/api-client";


const Booking = () => {
    const {data: currentUser } = useQuery("fetchCurrentUser", apiClient.fetchCurrentUser)

  return (
    <div>
      
    </div>
  )
}

export default Booking
