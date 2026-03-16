import { useState } from "react"
import lists from "../productlist/list"
import "./product.css"
import Cards from "../cards/cards"
export default function  Product(){
    let items=["All","Fruits","Vegetables","Dairy","SeaFood"]
    const[active,setActive]=useState("All")
    let categoryItem=active==="All"?lists:lists.filter(i=>i.category===active)
    let choice=categoryItem.slice(0,8).map((ca , ids)=>{
        return(
            <Cards key={ids} value={ca}/>
        )
    })
    return(
        <section className="fours" style={{display:"flex"}}>
                <div className="p">
                     <div style={{margin:"10px"}} > <h4 id="orange"> <span style={{ color: "orangered" }}>Our </span>Products</h4></div>
                 <div className="product-list" > 
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
                 <div className="card-section"  >
                    {choice}
                 </div>
                </div>
        </section>
    )
}