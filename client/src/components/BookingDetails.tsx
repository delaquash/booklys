import React from 'react';


interface Props {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  hotel: string;
  numberOfNights: number
}

const BookingDetails = ({}: Props) => {
  return (
    <div>BookingDetails</div>
  )
}

export default BookingDetails