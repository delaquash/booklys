import { formProps } from "../Pages/Register";
import axios from 'axios';
import { SignInProps } from "../Pages/SignIn";

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
  const res = await fetch(`${API_BASE_URL}/my_hotel`, {
    credentials: "include",
    method: "POST",
    body: hotelFormData
  });
  if (!res.ok) {
    throw new Error("Error during sign out");
  }
  return res.json();
  console.log(res.json())
}






// export const signin = async(formData: SignInProps ) => {
//   try {
//     const { data }= await axios.post(`${API_BASE_URL}/auth/login`, {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return data;
//   } catch (error:any) {
//     if (error.response) {
//       throw new Error(error.response.data.message);
//     } else if (error.request) {
//       throw new Error("No response was received from the server");
//     } else {
//       throw new Error("Error: " + error.message);
//       console.log(error.message)
//     }
//   }
// }