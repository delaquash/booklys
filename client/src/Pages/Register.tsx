import React from 'react';
import { useForm } from 'react-hook-form';

interface formProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string
}

const Register = () => {
    const { register } = useForm<formProps>()
  return (
    <form className="flex flex-col gap-5">
        <h2 className="font-bold text-3xl">
            Create an account
        </h2>
        <div className="flex flex-col md:flex-row gap-5">
            <label className="text-gray-700 text-sm font-bold">
                First Name
                <input 
                    {...register("firstName",{required:"This is a required field."} )}
                    className="border rounded w-full py-1 px-2 font-normal">

                </input>
            </label>
            <label className="text-gray-700 text-sm font-bold">
                Last Name
                <input 
                    {...register("lastName",{required:"This is a required field."} )}
                    className="border rounded w-full py-1 px-2 font-normal"></input>
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
        {/* {errors.password && ( */}
          <span className="text-red-500">
            {/* {errors.password.message} */}
          </span>
        {/* )} */}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
        ></input>
        {/* {errors.confirmPassword && ( */}
          <span className="text-red-500">
            {/* {errors.confirmPassword.message} */}
            </span>
        {/* )} */}
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
        >
          Create Account
        </button>
        </span>
        </div>
    </form>
  )
}

export default Register