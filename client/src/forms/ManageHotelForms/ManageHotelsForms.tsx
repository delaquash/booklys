import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

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
            <DetailsSection />
        </form>
    </FormProvider>
  )
}

export default ManageHotelsForms