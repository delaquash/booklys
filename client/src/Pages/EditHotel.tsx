import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as apiClient from "../Hooks/api-client";
import ManageHotelsForms from '../forms/ManageHotelForms/ManageHotelsForms';
import { useAppContext } from '../context/AppContext';

const EditHotel = () => {
    const { hotelId } = useParams();
    const {showToast} = useAppContext()
    const { data: hotel } = useQuery("editHotels", () => apiClient.fetchMyHotelById(hotelId || ""),
    {
        enabled: !!hotelId,
    })
    // const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    //     onSuccess: () => {
    //       showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    //     },
    //     onError: () => {
    //       showToast({ message: "Error Saving Hotel", type: "ERROR" });
    //     },
    //   });
    
    //   const handleSave = (hotelFormData: FormData) => {
    //     mutate(hotelFormData);
    //   };
    
      return (
        <ManageHotelsForms hotel={hotel} />
      );

}

export default EditHotel;


