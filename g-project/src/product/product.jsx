import { useState } from "react"
import "./product.css"
export default function  Product(){
    let items=["All","Fruits","vegetables","Dairy","SeaFood"]
    const[active,setActive]=useState("All")
    return(
        <section className="fours">
                 <div style={{margin:"10px"}} > <h4 id="orange"> <span style={{ color: "orangered" }}>Our </span>Products</h4></div>
                 <div className="product-list">
                    {
                        items.map((val,id)=>{
                            return(
                                <button id="b" key={id} className={active===val?"color":"white"} onClick={()=>setActive(val)}>
                                    {val}
                                </button>
                            )
                        })
                    }
                 </div>
        </section>
    )
}