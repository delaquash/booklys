import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Detailssection from "./Detailssection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestSection from "./GuestSection";
import ImageUpload from "./ImageUpload";
import { HotelFormDataProps, HotelType } from "../../../types/dataTypes";


type Props = {
  hotel?: HotelType
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

const ManageHotelsForms = ({hotel, isLoading, onSave }: Props) => {
  const formMethods = useForm<HotelFormDataProps>();
  const { handleSubmit, reset } = formMethods;

  useEffect(()=> {
    reset(hotel)
  }, [reset, hotel])

  const onSubmit = handleSubmit((formDataJson: HotelFormDataProps) => {
    const formData = new FormData();
    formData.append("name", formDataJson.name);
    if(hotel) {
      formData.append("hotelId", hotel._id)
    }
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index)=> {
        formData.append(`imageUrls[${index}]`, url)
      })
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });
    onSave(formData);
  });

 

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <Detailssection />
        <TypeSection />
        <FacilitiesSection />
        <GuestSection />
        <ImageUpload />
      
      <span className="flex justify-end">
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelsForms;
