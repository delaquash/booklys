import React from "react";
import { useFormContext } from "react-hook-form";
import { HotelFormDataProps } from "./ManageHotelsForms";

const GuestSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormDataProps>();
  return (
    <div>
      <h2 className="mb-3 font-bold text-2xl">Guest</h2>
      <div className="grid grid-cols-2 p-6 gap-5 bg-gray-300">
        <label className="text-gray-700 font-semibold text-sm">
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            value="number"
            minLength={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount.message}
            </span>
          )}
        </label>

        <label className="text-gray-700 font-semibold text-sm">
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            value="number"
            minLength={1}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestSection;
