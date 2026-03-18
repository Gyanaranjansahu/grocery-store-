import Footer from "../footer/footer";
import Nav from "../navbar/nav";
import "./dairy.css"
import product from "../productlist/list.js"
import { FaHeart, FaPlus } from "react-icons/fa";
import { useState } from "react";
export default function Dairy() {
      const [changes, setChanges] = useState(false)
        
let i=[]
let data=product.map((va)=>{

   if(va.category=="Dairy"){
        i.push(va)
    }
})
let store=i.map((item)=>{
    return(
         <div style={{
                    gap: "1rem", display: "flex", alignItems: "center", justifyContent: "center", padding: "25px", zIndex: "0",
                    boxShadow: "1px 1px 4px rgba(0,0,0,0.1)", borderRadius: "5px", background: "wheat"
                }}>
                    <div className="se"
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4rem"
                        }}>
                            <span style={{
                                display: "flex", alignItems: "center", justifyContent: "center", padding: "4px",
                            }} ><FaHeart /></span>
                            <span style={{
                                display: "flex", alignItems: "center", cursor: "pointer",
                                justifyContent: "center", color: "white", background: "orangered", fontSize: "smaller", padding: "5px", borderRadius: "5px"
                            }}> <FaPlus /> </span>
                        </div>
                        <div >
                            <img loading="preload" src={item.Image} alt="" width="90" />
                        </div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <button style={{
                            border: "none", borderRadius: "4px", background: "orangered", padding: "3px 5px", color: "white ", display: "flex",
                            alignItems: "center", justifyContent: "center", cursor: "pointer"
                        }}>Shop Now</button>
                    </div>
                </div>
    )
})

    return(
        <div>
            <Nav/>
              <div className="banerss">

           </div>
           <div style={{background:"white", display:"flex", justifyContent:"center", margin:"10px", gap:"1rem", flexWrap:"wrap"}} >
            {store}
           </div>
            <div className="fo">
                <Footer/>
            </div>
        </div>
    )
};
