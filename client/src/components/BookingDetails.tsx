import React from "react";
import { HotelType } from "../../types/dataTypes";

interface Props {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  hotel: HotelType;
  numberOfNights: number;
}

const BookingDetails = ({
  adultCount,
  checkIn,
  checkOut,
  childCount,
  hotel,
  numberOfNights,
}: Props) => {
  return <div>BookingDetails</div>;
};

export default BookingDetails;
