// import { useState } from "react"
// import { useParams } from "react-router-dom"
// import axios from "axios"

// function AddFoodPage() {

//   const { restaurantId } = useParams()

//   const [food, setFood] = useState({
//     name: "",
//     description: "",
//     price: "",
//     restaurantId: restaurantId
//   })

//   const handleChange = (e) => {

//     setFood({
//       ...food,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {

//     e.preventDefault()

//     try {

//       await axios.post(
//         "http://localhost:8080/api/foods",
//         food
//       )

//       alert("Food Added Successfully")

//       setFood({
//         name: "",
//         description: "",
//         price: "",
//         restaurantId: restaurantId
//       })

//     } catch (error) {

//       console.error(error)

//       alert("Failed To Add Food")
//     }
//   }

//   return (

//     <div
//       className="
//         flex
//         justify-center
//         items-center
//         min-h-screen
//         bg-gray-100
//       "
//     >

//       <form
//         onSubmit={handleSubmit}
//         className="
//           bg-white
//           p-8
//           rounded-xl
//           shadow-lg
//           w-full
//           max-w-md
//         "
//       >

//         <h1
//           className="
//             text-3xl
//             font-bold
//             mb-6
//             text-center
//           "
//         >
//           Add Food
//         </h1>

//         <input
//           type="text"
//           name="name"
//           placeholder="Food Name"
//           value={food.name}
//           onChange={handleChange}
//           className="
//             w-full
//             border
//             p-3
//             rounded-lg
//             mb-4
//           "
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={food.description}
//           onChange={handleChange}
//           className="
//             w-full
//             border
//             p-3
//             rounded-lg
//             mb-4
//           "
//           required
//         />

//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={food.price}
//           onChange={handleChange}
//           className="
//             w-full
//             border
//             p-3
//             rounded-lg
//             mb-4
//           "
//           required
//         />

//         <button
//           type="submit"
//           className="
//             w-full
//             bg-green-500
//             hover:bg-green-600
//             text-white
//             py-3
//             rounded-lg
//             font-bold
//           "
//         >
//           Submit
//         </button>

//       </form>

//     </div>
//   )
// }

// export default AddFoodPage
import { useState } from "react"
import { useParams } from "react-router-dom"

import { addFood }
  from "../services/foodService"

function AddFoodPage() {
  const { restaurantId } = useParams()

  const [food, setFood] = useState({

    name: "",
    description: "",
    price: "",
    restaurantId: ""

  })

  const handleChange = (e) => {

    setFood({

      ...food,
      [e.target.name]: e.target.value

    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await addFood(food)

      alert("Food Added Successfully")

      setFood({

        name: "",
        description: "",
        price: "",
        restaurantId: ""

      })

    } catch (error) {

      console.error(error)

      alert("Failed To Add Food")
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
            mb-6
            text-center
          "
        >
          Add Food Item
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={food.name}
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

        <textarea
          name="description"
          placeholder="Description"
          value={food.description}
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
          name="price"
          placeholder="Price"
          value={food.price}
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
          name="restaurantId"
          placeholder="Restaurant ID"
          value={food.restaurantId}
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
          Add Food
        </button>

      </form>

    </div>
  )
}

export default AddFoodPage