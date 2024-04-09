import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as apiClient from "../Hooks/api-client";

const EditHotel = () => {
    const { hotelId } = useParams();
    const { data: hotel } = useQuery("editHotels", () => apiClient.editHotels(hotelId || ""),
    {
        enabled: !!hotelId,
    })
  return (
    <div>EditHotel</div>
  )
}

export default EditHotel