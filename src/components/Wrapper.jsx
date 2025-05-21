
import { useState, createContext } from "react";

export const todoContext = createContext(null)
const Wrapper = (props)=> {
    
  const[todo, settodo] = useState([{
    id:1,
    title:"kaam karo",
    isCompleted:false
  }])

  return (
    <>
   <todoContext.Provider value={[todo, settodo]}>
    {props.children}
   </todoContext.Provider>
    </>
  );
}

export default Wrapper;