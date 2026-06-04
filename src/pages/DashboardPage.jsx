// function DashboardPage() {

//   return (

//     <div>

//       <h1
//         className="
//         text-4xl
//         font-bold
//         mb-6
//       "
//       >
//         Owner Dashboard
//       </h1>

//       <div
//         className="
//         grid
//         grid-cols-1
//         md:grid-cols-2
//         gap-6
//       "
//       >

//         <div
//           className="
//           bg-white
//           shadow-lg
//           rounded-lg
//           p-6
//         "
//         >

//           <h2 className="text-2xl font-bold mb-2">
//             Restaurants
//           </h2>

//           <p>
//             Manage restaurant details
//           </p>

//         </div>

//         <div
//           className="
//           bg-white
//           shadow-lg
//           rounded-lg
//           p-6
//         "
//         >

//           <h2 className="text-2xl font-bold mb-2">
//             Food Items
//           </h2>

//           <p>
//             Manage menu items
//           </p>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default DashboardPage
import { useNavigate } from "react-router-dom"

function DashboardPage() {

  const navigate = useNavigate()

  return (

    <div>

      <h1
        className="
          text-4xl
          font-bold
          mb-6
        "
      >
        Owner Dashboard
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {/* Restaurant Card */}

        <div
          className="
            bg-white
            shadow-lg
            rounded-lg
            p-6
          "
        >

          <h2 className="text-2xl font-bold mb-2">
            Restaurants
          </h2>

          <p className="mb-4">
            Manage restaurant details
          </p>

          <div className="flex gap-3">

            <button
              onClick={() => navigate("/restaurants")}
              className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
              "
            >
              View Restaurants
            </button>

            <button
              onClick={() =>
                navigate("/add-restaurant")
              }
              className="
                bg-green-500
                hover:bg-green-600
                text-white
                px-4
                py-2
                rounded-lg
              "
            >
              Add Restaurant
            </button>

          </div>

        </div>

        {/* Food Item Card */}

        <div
          className="
            bg-white
            shadow-lg
            rounded-lg
            p-6
          "
        >

          <h2 className="text-2xl font-bold mb-2">
            Food Items
          </h2>

          <p className="mb-4">
            Manage menu items
          </p>

          <button
            onClick={() => navigate("/add-food")}
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-4
              py-2
              rounded-lg
            "
          >
            Add Food Item
          </button>

        </div>

      </div>

    </div>
  )
}

export default DashboardPage