import { useContext } from "react"
import "./login.css"
import { User } from "../contex/context"
import { useNavigate } from "react-router-dom"
import {Toaster,toast} from "react-hot-toast"
import { Link } from "react-router-dom"
export default function Login(params) {
    let {name,setName,email,setEmail,password,setPassword,usercreate,person,data}=useContext(User)
    let verify=JSON.parse(localStorage.getItem("user"))
    let navigate=useNavigate()
    function handling(e){
        e.preventDefault()
        // Add login logic here
        if(email===verify.email && password===verify.password){
// its true so login
toast.success('Login successful!')
          setTimeout(() => {
              navigate("/home")
          }, (2000));
            return
        }
        else{
            toast.error("Invalid email or password")
        }

        console.log(email);
        console.log(password);
        
    }
        return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column", gap: "1rem" }} className="login">
            <h1 style={{ color: "white" }}>Login Page</h1>
            <div style={{

                display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", borderRadius: "5px"
            }} className="in">
                <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="form" onSubmit={handling}>
                    <input type="email" placeholder="Email" style={{ padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid gray" }} onChange={(e)=>setEmail(e.target.value)} value={email } name="email" required/>
                    <input type="password" placeholder="Password" style={{ padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid gray" }} onChange={(e)=>setPassword(e.target.value)} value={password} name="password" required/>
                    <button style={{ padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid gray", backgroundColor: "blue", color: "white", cursor: "pointer" } } type="submit">Login</button>
                </form>
                <p style={{ color: "white", marginTop: "10px" }}>Don't have an account? <Link to="/signup" style={{ color: "blue" }}>Sign Up</Link></p>
            </div>
            <Toaster
  position="top-right"
  reverseOrder={true}
/>
        </div>
    )

};
