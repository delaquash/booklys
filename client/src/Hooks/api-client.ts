import { formProps } from "../Pages/Register";
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log(API_BASE_URL)

// export const register = async (formData: formProps) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/user/register`, formData, {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Axios automatically parses the JSON response body, so you can directly access it
//     return response.data;
//     console.log(response.data)
//   } catch (error:any) {
//     // Axios wraps the response error in the error object under the response property
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       throw new Error(error.response.data.message);
//       console.log(error.response.data.message)
//     } else if (error.request) {
//       // The request was made but no response was received
//       throw new Error("No response was received from the server");
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       throw new Error("Error: " + error.message);
//       console.log(error.message)
//     }
//   }
// };


export const register = async (formData: formProps) => {
  const response = await fetch(`${API_BASE_URL}/user/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
}