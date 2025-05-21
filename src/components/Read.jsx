import { toast } from "react-toastify";
import { useContext } from "react";
import { todoContext } from "./Wrapper";
 // ✅ CORRECT


const Read =()=> {
   const [todo, settodo] = useContext(todoContext)

const Deletehandler = (id)=>{
    const fil = todo.filter((todo)=> todo.id != id)
    settodo(fil)
    toast.info("todo delete")
}

    let rendertodo = todo.map((todo)=>{
  return <li
                key={todo.id}
                className="mb-2  flex justify-between items-center p-4 bg-gray-900 rounded"
            >
                <span className="text-xl font-thin">{todo.title}</span>
                <button
                    className="text-sm font-thin text-red-400"
                    onClick={() => Deletehandler (todo.id)}
                >
                    Delete
                </button>
            </li>
})

  return (
    <>
     <div className="w-[40%] p-10">
            <h1 className="mb-10 text-5xl font-thin">
                <span className="text-pink-400">Pending</span> Todos
            </h1>
            <ol>{rendertodo}</ol>
        </div>
    </>
  );
}

export default Read;