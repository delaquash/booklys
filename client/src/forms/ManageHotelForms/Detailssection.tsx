import React from 'react';
import { useFormContext } from 'react-hook-form';
import { HotelFormDataProps } from './ManageHotelsForms';


const Detailssection = () => {
    const {handleSubmit,register,formState: {errors}} = useFormContext<HotelFormDataProps>()
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
        <label className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        ></input>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>
            
    </div>
  )
}

export default Detailssection