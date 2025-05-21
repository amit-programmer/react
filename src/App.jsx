import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  // const[todo, settodo] = useState([{
  //   id:1,
  //   title:"kaam karo",
  //   isCompleted:false
  // }])

  return (
    <>
      <div className="w-screen h-screen bg-gray-800 text-white p-5 flex">
        <Create />

        <Read />
      </div>
    </>
  );
};

export default App;
