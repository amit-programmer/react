import { nanoid } from "nanoid/non-secure";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {todoContext} from "./Wrapper"

function Create() {
  
   const [todo, settodo] = useContext(todoContext)


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [title, settitle] = useState("");

  // const changehandler = (e) => {
  //   setfullname(e.target.value);
  // };
  // console.log(fullname)

  const submithandler = (data) => {
  data.isCompleted = false;
        data.id = nanoid();

    let copytodos = [...todo];
    copytodos.push(data);
    settodo(copytodos);

    toast("Todo created!");

    reset();
  };
  return (
    <>
      <div className=" w-[60%] p-10 ">
        <h1 className="mb-10 text-[5rem] font-thin">
          Set{" "}
          <span className="p-2 font-regular w-full  font-thin  text-red-500">
            Reminders
          </span>
          <br />
          for tasks
        </h1>
        <form className="mt-10 " onSubmit={handleSubmit(submithandler)}>
          <input 
           {...register("title", { 
              required: "title can you not be empty" 
            })}
            className="px-6 py-4 outline-none bg-gray-900 rounded-xl text-2xl text-white w-100"
            placeholder="title"
            type="text"
      
           
          />
         <small className="font-thin text-red-400">
                    {errors?.title?.message}
                </small>
          <br />
          <button className="mt-5 text-xl px-10 py-2 border rounded hover:bg-gray-700 active:scale-[0.96]">
            Create Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
