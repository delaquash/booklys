import { formProps } from "../Pages/Register";
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const register = async (formData: formProps) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/register`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Axios automatically parses the JSON response body, so you can directly access it
    return response.data;
  } catch (error:any) {
    // Axios wraps the response error in the error object under the response property
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response was received from the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error("Error: " + error.message);
    }
  }
};
