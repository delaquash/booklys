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
    <div>GuestInfoForms</div>
  )
}

export default GuestInfoForms;