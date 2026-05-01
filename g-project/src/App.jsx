
import Home from "./home/home.jsx";
import About from "./about/about.jsx";
import Contact from "./contact/contact.jsx";
// import Signup from "./assets/auth/signup.jsx";
import { Route, Routes } from "react-router-dom";
import Fruits from "./fruits/fruits.jsx";
import Dairy from "./dairy/dairy.jsx";
import Seafood from "./seafood/seafood.jsx";
import Login from "./auth/login.jsx";
import Signup from "./auth/signup.jsx";


export default function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/meat" element={<Seafood />} />
      </Routes>

    </>

  )
};