import { formProps } from "../Pages/Register";
import axios from 'axios';
import { SignInProps } from "../Pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const register = async (formData: formProps) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/register`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error:any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error("No response was received from the server");
    } else {
      throw new Error("Error: " + error.message);
      console.log(error.message)
    }
  }
};

export const validateToken = async(formData: SignInProps )=> {
  const res = await axios.get(`${API_BASE_URL}/auth/validateToken`, {
    withCredentials: true
  })

  if(!res) {
    throw new Error("Token  validation failed")
  }
  
  return res.data

}

export const signin = async() => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/login`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error:any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error("No response was received from the server");
    } else {
      throw new Error("Error: " + error.message);
      console.log(error.message)
    }
  }
}