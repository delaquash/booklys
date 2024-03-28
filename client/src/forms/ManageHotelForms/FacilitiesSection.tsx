import React from 'react';
import { hotelFacilities } from '../../config/hotel-options-config';
import { useFormContext } from 'react-hook-form';
import { HotelFormDataProps } from './ManageHotelsForms';

const FacilitiesSection = () => {
    const {register,watch, formState: {errors}} = useFormContext<HotelFormDataProps>();
  return (
    <div>
        <h2 className="mb-3 font-bold text-2xl">Facilities</h2>
        <div className="grid grid-cols-5 gap-3">
            {hotelFacilities.map((facility)=> (
                <label  key={facility} className='text-sm flex gap-1 text-gray-700'>
                    <input 
                        type='checkbox'
                        value={facility}
                        {...register("facilities", {
                            validate: (facilities)=> {
                                if(facilities && facilities.length > 0){
                                    return true;
                                } else {
                                    return "At least one facility is required"
                                }
                            }
                        })}
                    />
                    {facility}
                </label>
            ))}
        </div>
        {errors.facilities && (
            <span className="text-red-500 text-sm font-bold">{errors.facilities.message}</span>
        )}
    </div>
  )
}

export default FacilitiesSection