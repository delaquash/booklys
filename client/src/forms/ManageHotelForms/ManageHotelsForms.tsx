import React from 'react';
import { useForm } from 'react-hook-form';

export type HotelFormDataProps = {
    name: string;
    description:string;
    city: string;
    country: string;
    type: string;
    pricePerNight: number;
    starRating: number;
    facilities: string[];
    // imageFiles: FileList;
    adultCount: number;
    childCount: number;
}


const ManageHotelsForms = () => {
  return (
    <div>ManageHotelsForms</div>
  )
}

export default ManageHotelsForms