import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Detailssection from './Detailssection';
import TypeSection from './TypeSection';
import FacilitiesSection from './FacilitiesSection';
import GuestSection from './GuestSection';
import ImageUpload from './ImageUpload';

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
            <ImageUpload />
        </form>
        <span className="flex justify-end">
          <button
            type='submit'
            className='bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl'
          >
            Save
          </button>
        </span>
    </FormProvider>
  )
}

export default ManageHotelsForms