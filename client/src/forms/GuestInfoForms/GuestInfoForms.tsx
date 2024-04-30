import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
    pricePerNight: number;
    hotelId: number;
}

interface IFormInputs {
    CheckIn: Date;
    CheckOut: Date;
    AdultCount: number;
    ChildCount: number;
}

const GuestInfoForms = ({pricePerNight, hotelId}:Props) => {
    const {watch, register, handleSubmit, formState: {errors}} = useForm<IFormInputs>()
  return (
    <div className='flex flex-col p-4 gap-4 bg-blue-200'>
        <h3 className='text-md font-bold'>{pricePerNight}</h3>
        <form>
             <div className='flex flex-col gap-4 items-center'>
                
            </div>
        </form>
       

    </div>
  )
}

export default GuestInfoForms;