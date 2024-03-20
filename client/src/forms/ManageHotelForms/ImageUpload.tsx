import React from 'react'
import { useFormContext } from "react-hook-form";
import { HotelFormDataProps } from "./ManageHotelsForms";

function ImageUpload() {
    const {
        register,
        watch,
        formState: { errors },
      } = useFormContext<HotelFormDataProps>();
  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">
            Images
        </h2>
        <div className="border rounded p-4 flex flex-col">
            <input 
                type='file'
                multiple
                accept='image/*'
                className='w-full text-gray-700 font-normal'
                {...register("imageFiles", {
                    validate: (imageFiles) => {
                        const totalLength = imageFiles.length;
                        if(totalLength === 0){
                            return "At least one image should be added";
                        }
                        if(totalLength > 6){
                            return "Total number of images cannot be more than 6"
                        }
                        return true;
                    }
                })}
            />
        </div>
        {errors.imageFiles  && (
            <span className="text-red-500 text-sm font-bold">
              {errors.imageFiles.message}
            </span>
          )}
    </div>
  )
}

export default ImageUpload