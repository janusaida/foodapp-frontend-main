// import api from "../api/axios"

// export const getRestaurants = async () => {

//   const response = await api.get(
//     "/restaurants"
//   )

//   return response.data
// }
import axios from "axios"

const API =
  "http://localhost:8080/api/restaurants"

export const addRestaurant =
  async (restaurantData) => {

    const response =
      await axios.post(
        API,
        restaurantData
      )

    return response.data
}

export const getRestaurants =
  async () => {

    const response =
      await axios.get(API)

    return response.data
}