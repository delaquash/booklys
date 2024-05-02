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

const BookingForm= () => {
    const { handleSubmit, register} = useForm<BookingDataForm>()
}