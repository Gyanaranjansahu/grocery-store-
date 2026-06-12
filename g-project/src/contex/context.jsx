import { createContext } from "react";
import { useState } from "react";
export const User=createContext()

function Context({children}){
    const[name,setName] = useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[count,setCount]=useState(0)
    const[person,setPerson]=useState(null)
    const[cart,setCart]=useState([])

    function usercreate(){
        let userdata={
            name:name,
            email:email,
            password:password
        }
        setPerson(userdata)
        localStorage.setItem("user",JSON.stringify(userdata))
    }
     
    return(
        <User.Provider value={{ name, setName, email, setEmail, password, setPassword, count, setCount ,usercreate,person,cart,setCart}}>
            {children}
        </User.Provider>
    )
}
export default Context