import React from 'react';
import { useFormContext } from 'react-hook-form';
import { HotelFormDataProps } from './ManageHotelsForms';

const GuestSection = () => {
    const {register,watch, formState: {errors}} = useFormContext<HotelFormDataProps>();
  return (
    <div>
        <h2 className="mb-3 font-bold text-2xl">Guest</h2>
        <div className=''>

        </div>
    </div>
  )
}

export default GuestSection;