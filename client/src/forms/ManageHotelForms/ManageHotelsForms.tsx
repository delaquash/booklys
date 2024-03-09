import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Detailssection from './Detailssection';

export type HotelFormDataProps = {
    name: string;
    description:string;
    city: string;
    country: string;
    type: string;
    pricePerNight: number;
    starRating: number;
    facilities: string[];
    imageFiles: FileList;
    adultCount: number;
    childCount: number;
}


const ManageHotelsForms = () => {
    const formMethods = useForm<HotelFormDataProps>()
  return (
    <FormProvider {...formMethods}>
        <form>
            <Detailssection />
        </form>
    </FormProvider>
  )
}

export default ManageHotelsForms