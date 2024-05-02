import { useForm } from "react-hook-form";
import { UserType } from "../../../types/dataTypes";

interface Props {
    currentUser : UserType;
}

interface BookingDataForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const BookingForm= ({currentUser}: Props) => {
    const { handleSubmit, register} = useForm<BookingDataForm>({defaultValues:{
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    }});
    return (
        <form className="grid grid-cols-1 gap-5 p-5 rounded-lg border border-slate-300">
            <span className="text-3xl font-bold">Confirm Your Details.</span>
            <div className="grid grid-cols-2 gap-6">
            <label className="flex-1 font-bold text-sm text-gray-700">
                First Name
                <input 
                    className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                    type="text"
                    readOnly
                    disabled
                    {...register("firstName")}
                />
            </label>
            <label className="flex-1 font-bold text-sm text-gray-700">
                Last Name
                <input 
                    className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                    type="text"
                    readOnly
                    disabled
                    {...register("lastName")}
                />
            </label>
            <label className="flex-1 font-bold text-sm text-gray-700">
                Email
                <input 
                    className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                    type="text"
                    readOnly
                    disabled
                    {...register("email")}
                />
            </label>
            </div>
        </form>

    )
}

export default BookingForm;