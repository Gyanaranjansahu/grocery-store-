import Footer from "../footer/footer";
import Nav from "../navbar/nav";
import "./dairy.css"
import product from "../productlist/list.js"
import { FaHeart, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Dairycard from "../dairycard/dairycard.jsx";
export default function Dairy() {
      const [changes, setChanges] = useState(false)
        
let i=[]
let data=product.map((va)=>{

   if(va.category=="Dairy"){
        i.push(va)

    }
})
let d=i.map((item ,id)=>{
   return(
     <Dairycard key={id} val={item}/>
   )
})
   

    return(
        <div>
            <Nav/>
              <div className="banerss">

           </div>
           <div style={{background:"white", display:"flex", justifyContent:"center", margin:"10px", gap:"1rem", flexWrap:"wrap"}} >
            {d}
           </div>
            <div className="fo">
                <Footer/>
            </div>
        </div>
    )
};
