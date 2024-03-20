import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Detailssection from './Detailssection';
import TypeSection from './TypeSection';
import FacilitiesSection from './FacilitiesSection';
import GuestSection from './GuestSection';

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
        <form className='flex flex-col gap-10'>
            <Detailssection />
            <TypeSection/>
            <FacilitiesSection />
            <GuestSection />
        </form>
    </FormProvider>
  )
}

export default ManageHotelsForms