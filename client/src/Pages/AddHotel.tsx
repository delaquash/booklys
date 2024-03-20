import React from 'react'
import ManageHotelsForms from '../forms/ManageHotelForms/ManageHotelsForms'
import { useMutation } from 'react-query'
import { useAppContext } from '../context/AppContext'
import * as apiClient from "../Hooks/api-client"


function AddHotel() {
  const { showToast } = useAppContext()
  const {isLoading, mutate} = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({message: "Hotel Saved", type: "SUCCESS"})
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR"})
    }
  })
  const handleSave =(hotelFormData: FormData) => {
    mutate(hotelFormData)
  }
  return (
    <ManageHotelsForms
        onSave={handleSave}
        isLoading={isLoading}
    />
  )
}

export default AddHotel