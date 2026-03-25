
import Home from "./home/home.jsx";
import { Route, Routes } from "react-router-dom";
import Fruits from "./fruits/fruits.jsx";
import Dairy from "./dairy/dairy.jsx";
import Seafood from "./seafood/seafood.jsx";
import { createContext, useState } from "react";
let User = createContext()
export default function App() {
  const [add, setAdd] = useState(0)
  return(
    <>

   <User.Provider value={{add,setAdd}}>
     <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/dairy" element={<Dairy />} />
      <Route path="/meat" element={<Seafood />} />
    </Routes>
   </User.Provider>

</>

  )
};
export { User }