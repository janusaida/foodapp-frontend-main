// import api from "../api/axios"

// export const getFoodByRestaurant =
//   async (restaurantId) => {

//     const response = await api.get(
//       `/food/restaurant/${restaurantId}`
//     )

//     return response.data
// }
import axios from "axios"

const API =
  "http://localhost:8080/api/food"

export const addFood = async (foodData) => {

  const response =
    await axios.post(API, foodData)

  return response.data
}

export const getFoodByRestaurant =
  async (restaurantId) => {

    const response =
      await axios.get(
        `${API}/restaurant/${restaurantId}`
      )

    return response.data
}