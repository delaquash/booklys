import { useActionData } from "react-router-dom";
import { useAppContext } from "../context/AppContext"
import * as apiClient from "../Hooks/api-client";
import { useMutation } from "react-query";

const SignOut = () => {
    const {showToast} = useAppContext();
    const mutation = useMutation(apiClient.signout, {
        onSuccess:()=>{},
        onError:()=>{}
    })

    const handleClick =()=> {
        mutation.mutate()
    }

  return (
    <button

        className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100">
        Sign Out
    </button>
  )
}

export default SignOut