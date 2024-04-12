import { formProps } from "../Pages/Register";
import axios from 'axios';
import { SignInProps } from "../Pages/SignIn";
import { HotelType } from "../../types/dataTypes";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

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


export const signIn = async (formData: SignInProps) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message  || "Invalid Credentials");
  }
  return body;
};


export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};


export const signout = async () => {
  const res = await fetch (`${API_BASE_URL}/auth/logout`, {
    credentials: "include",
    method: "POST"
  })
  if (!res.ok) {
    throw new Error("Error during sign out");
  }
}

export const addMyHotel = async (hotelFormData: FormData) => {
  const res = await fetch(`${API_BASE_URL}/my_hotel/create-hotel`, {
    credentials: "include",
    method: "POST",
    body: hotelFormData
  });
  if (!res.ok) {
    throw new Error("Error during sign out");
  }
  return res.json();
}


export const fetchAllHotels = async ():Promise<HotelType[]> => {
    const res = await fetch(`${API_BASE_URL}/my_hotel/get-hotels`, {
      credentials: "include"
    });

    if(!res.ok){
      throw new Error("Error during get hotels")
    }
    return res.json()
}


export const fetchMyHotelById = async(hotelId:string): Promise<HotelType>=> {
  const res = await fetch (`${API_BASE_URL}/my_hotel/${hotelId}`, {
    credentials: "include"
  })
  if(!res.ok){
    throw new Error("Error fetching hotels")
  }
  return res.json()

}

export const editSingleHotelById = async (hotelFormData: FormData) => {
    const response = await fetch (`${API_BASE_URL}/my_hotel/${hotelFormData.get("hotelId")}`,{
      method: "PUT",
      body: hotelFormData,
      credentials: "include"
    })
    if(!response.ok){
      throw new Error("Error fetching single hotel")
    }
    return response.json()
}