import { useState }
from "react"

import {
  addRestaurant
}
from "../services/restaurantService"

function AddRestaurantPage() {

  const [restaurant, setRestaurant] =
    useState({

      name: "",
      location: "",
      rating: ""

    })

  const handleChange = (e) => {

    setRestaurant({

      ...restaurant,
      [e.target.name]:
        e.target.value

    })
  }

  const handleSubmit =
    async (e) => {

      e.preventDefault()

      try {

        await addRestaurant(
          restaurant
        )

        alert(
          "Restaurant Added Successfully"
        )

        setRestaurant({

          name: "",
          location: "",
          rating: ""

        })

      } catch (error) {

        console.log(error)

        alert(
          "Failed To Add Restaurant"
        )
      }
    }

  return (

    <div
      className="
        flex
        justify-center
        items-center
        min-h-screen
        bg-gray-100
      "
    >

      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          p-8
          rounded-xl
          shadow-lg
          w-full
          max-w-md
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-center
            mb-6
          "
        >
          Add Restaurant
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={restaurant.name}
          onChange={handleChange}
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-4
          "
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={restaurant.location}
          onChange={handleChange}
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-4
          "
          required
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={restaurant.rating}
          onChange={handleChange}
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-4
          "
          required
        />

        <button
          type="submit"
          className="
            w-full
            bg-green-500
            hover:bg-green-600
            text-white
            py-3
            rounded-lg
            font-bold
          "
        >
          Add Restaurant
        </button>

      </form>

    </div>
  )
}

export default AddRestaurantPage