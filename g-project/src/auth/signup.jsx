import { useContext } from "react"
import "./login.css"
import { User } from "../contex/context"
import { useNavigate } from "react-router-dom"
import {Toaster,toast} from "react-hot-toast"
export default function Signup(params) {
    let {name,setName,email,setEmail,password,setPassword,usercreate,person,data}=useContext(User)
    // used for autoreloding
    let redirect=useNavigate()
    function handle(e){
        e.preventDefault()
        usercreate()
        console.log(person);
       setTimeout(() => {
         setName("")
        setEmail("")
        setPassword("")
       }, 2000);

       if(person){
            setTimeout(() => {
         toast.success("Signup successful!")
       }, 1000);
       }

   


        setTimeout(() => {
            redirect("/")
        }, 2000);
    }

    return(
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column", gap: "1rem" }} className="signup">
            <h1 style={{ color: "white" }}>Signup Page</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", borderRadius: "5px" }} className="in">
                <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="form" onSubmit={handle}>
                    <input type="text" placeholder="Username" style={{ padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid gray" }} required onChange={(e)=>setName(e.target.value)} value={name} name="name"/>
                    <input type="email" placeholder="Email" style={{ padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid gray" }} required onChange={(e)=>setEmail(e.target.value)} value={email} name="email"/>
                    <input type="password" placeholder="Password" style={{ padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid gray" }} required onChange={(e)=>setPassword(e.target.value)} value={password} name="password"/>
                    <button style={{ padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid gray", backgroundColor: "blue", color: "white", cursor: "pointer" }} type="submit" onClick={usercreate}>Signup</button>
                </form>
              
            </div>
              <div><Toaster
                position="top-right"
  reverseOrder={true}
                /></div>
        </div>
    )
};
