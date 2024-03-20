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
    const { handleSubmit } = formMethods
    const onSubmit = handleSubmit ((formDataJson:HotelFormDataProps)=>{
      const formData = new FormData();
      formData.append("name", formDataJson.name)
      formData.append("city", formDataJson.city)
      formData.append("country", formDataJson.country)
      formData.append("description", formDataJson.description)
      formData.append("type", formDataJson.type)
      formData.append("pricePerNight", formDataJson.pricePerNight.toString())
      formData.append("starRating", formDataJson.starRating.toString())
      formData.append("adultCount", formDataJson.adultCount.toString())
      formData.append("childCount", formDataJson.childCount.toString())

      formDataJson.facilities.forEach((facility, index)=>{
        formData.append(`facilities[${index}]`, facility);
      });

      Array.from(formDataJson.imageFiles).forEach((imageFile)=> {
        formData.append(`imageFiles`, imageFile);
      });
    });
      return (
    <FormProvider {...formMethods}>
        <form className='flex flex-col gap-10' onSubmit={onSubmit}>
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