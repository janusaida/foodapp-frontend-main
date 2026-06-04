// import { Link } from "react-router-dom"

// function RestaurantCard({ restaurant }) {

//   return (

//     <div
//       className="
//       bg-white
//       shadow-lg
//       rounded-lg
//       overflow-hidden
//       hover:scale-105
//       transition
//       duration-300
//     "
//     >

//       <div className="p-5">

//         <h2 className="text-2xl font-bold mb-2">
//           {restaurant.name}
//         </h2>

//         <p className="text-gray-600 mb-2">
//           {restaurant.location}
//         </p>

//         <p className="mb-4">
//           ⭐ {restaurant.rating}
//         </p>

//         <Link
//           to={`/restaurant/${restaurant.id}`}
//           className="
//           bg-black
//           text-white
//           px-4
//           py-2
//           rounded
//         "
//         >
//           View Menu
//         </Link>

//       </div>

//     </div>
//   )
// }

// export default RestaurantCard
import { Link } from "react-router-dom"

function RestaurantCard({ restaurant }) {

  return (

    <div
      className="
        bg-white
        shadow-lg
        rounded-lg
        overflow-hidden
        hover:scale-105
        transition
        duration-300
      "
    >

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-2">
          {restaurant.name}
        </h2>

        <p className="text-gray-600 mb-2">
          {restaurant.location}
        </p>

        <p className="mb-4">
          ⭐ {restaurant.rating}
        </p>

        <div className="flex gap-3">

          {/* View Menu Button */}

          <Link
            to={`/restaurant/${restaurant.id}`}
            className="
              bg-black
              text-white
              px-4
              py-2
              rounded
              hover:bg-gray-800
            "
          >
            View Menu
          </Link>

          {/* Add Food Button */}

          <Link
            to={`/add-food/${restaurant.id}`}
            className="
              bg-green-500
              text-white
              px-4
              py-2
              rounded
              hover:bg-green-600
            "
          >
            Add Food
          </Link>

        </div>

      </div>

    </div>
  )
}

export default RestaurantCard