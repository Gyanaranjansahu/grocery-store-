
import Home from "./home/home.jsx";
import { Route, Routes } from "react-router-dom";
import Fruits from "./fruits/fruits.jsx";
import Dairy from "./dairy/dairy.jsx";
import Seafood from "./seafood/seafood.jsx";

export default function App(params) {
  return(
<>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/fruits" element={<Fruits/>}/>
  <Route path="/dairy" element={<Dairy/>}/>
  <Route path="/meat" element={<Seafood/>}/>
</Routes>

</>
  )
};
