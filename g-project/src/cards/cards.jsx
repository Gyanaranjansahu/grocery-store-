import { createContext, useContext, useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import "./card.css"
import { User } from "../contex/context";


export default function Cards({ value }) {
    const [change, setChange] = useState(false)
    let { count, setCount ,cart ,setCart} = useContext(User)
    let [display,setDisplay]=useState(false)
    function adding() {
        setCount(count + 1)
    }





    return (

        <div style={{
            gap: "1rem", display: "flex", alignItems: "center", justifyContent: "center", padding: "25px", zIndex: "0",
            boxShadow: "1px 1px 4px rgba(0,0,0,0.1)", borderRadius: "5px", background: "wheat",
           
        }} id="cards">
            <div className="se"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "7rem"
                }}>
                    <span style={{
                        display: "flex", alignItems: "center", justifyContent: "center", padding: "4px",
                    }} onClick={() => setChange(!change)} className={change ? "effect" : "remove"}   ><FaHeart /></span>
                    {/* <span style={{
                        display: "flex", alignItems: "center", cursor: "pointer",
                        justifyContent: "center", color: "white", background: "orangered", fontSize: "smaller", padding: "5px", borderRadius: "5px"
                    }} onClick={adding}> <FaPlus /> </span> */}
                </div>
                <div >
                    <img loading="preload" src={value.Image} alt="" width="90" />
                </div>
                <span>{value.name}</span>
                <span>₹{value.price}</span>

             


                {display?
                <div className="add"  style={{border:"1px solid red", 
                    display:"flex",justifyContent:"space-between" ,alignItems:"center",padding:"1px"
                }}>
                    <button style={{width:"30%",fontWeight:"bold" , cursor:"pointer" , border:"none"}}>+</button>
                    <button style={{width:"30%",fontWeight:"bold" , cursor:"pointer" , border:"none"}}>-</button>
                </div>:   <button style={{
                    border: "none", borderRadius: "4px", background: "orangered", padding: "3px 5px", color: "white ", display: "flex",
                    alignItems: "center", justifyContent: "center", cursor: "pointer"
                }} onClick={()=>setDisplay(true)}>
                    
                         Shop Now

                </button>}
            </div>
        </div>
    )
}
