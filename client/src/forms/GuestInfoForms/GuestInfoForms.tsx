import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchContext } from "../../context/SearchContext";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

interface Props {
  pricePerNight: number;
  hotelId: string;
}

interface IFormInputs {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
}

const GuestInfoForms = ({ pricePerNight, hotelId }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate()
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      adultCount: search.adultCount,
      childCount: search.childCount,
    },
  });
  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);

  const onSignInClick = (data: IFormInputs) => {
        search.saveSearchValues(
            "",
            data.checkIn,
            data.checkOut,
            data.adultCount,
            data.childCount,
        )
        navigate("/sign-in", { state: { from: location }})
  }

  return (
    <div className="flex flex-col p-4 gap-4 bg-blue-200">
      <h3 className="text-md font-bold">{pricePerNight}</h3>
      <form>
        <div className="flex flex-col gap-4 items-center">
          <div>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setValue("checkIn", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
          </div>
          <div>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setValue("checkIn", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
          </div>
          <div className="flex bg-white px-2 py-1 gap-2">
            <label className="items-center flex">
              Adults:
              <input
                className="w-full p-1 focus:outline-none font-bold"
                type="number"
                min={1}
                max={20}
                {...register("adultCount", {
                  required: "Adults count is required",
                  min: {
                    value: 1,
                    message: "There must be atleast one adult.",
                  },
                  valueAsNumber: true,
                })}
              />
            </label>
            <label className="items-center flex">
              Children:
              <input
                className="w-full p-1 focus:outline-none font-bold"
                type="number"
                min={0}
                max={20}
                {...register("childCount", {
                  valueAsNumber: true,
                })}
              />
              {errors.adultCount && (
                <span className="text-red-500 font-semibold text-sm">
                  {errors.adultCount.message}
                </span>
              )}
            </label>
          </div>
          {isLoggedIn ? (
            <button className="bg-blue-600 text-white h-full p-2 font-bold hover:bg-blue-500 text-xl">
              Book Now
            </button>
          ) : (
            <button className="bg-blue-600 text-white h-full p-2 font-bold hover:bg-blue-500 text-xl">
              Sign in to Book
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GuestInfoForms;
