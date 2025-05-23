
import { NavLink } from "react-router-dom";
import Mainroutes from "./components/Mainroutes";


const App = () => {
  // const[todo, settodo] = useState([{
  //   id:1,
  //   title:"kaam karo",
  //   isCompleted:false
  // }])
  console.log("Hi")

  return (
  <>
    <div className="relative w-screen min-h-screen">
      <nav className="flex flex-wrap gap-4 p-4 justify-center bg-gray-900 fixed top-5 left-0 w-full z-50 shadow-md">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "text-white hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "text-white hover:text-yellow-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Product"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "text-white hover:text-yellow-300"
          }
        >
          Product
        </NavLink>
      </nav>
      <div className="pt-20 w-screen min-h-screen bg-gray-800 text-white flex">
        <Mainroutes />
      </div>
    </div>
  </>
);
};

export default App;
