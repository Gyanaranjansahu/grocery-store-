import FishCard from "../fishcard/fishcard";
import Footer from "../footer/footer";
import Nav from "../navbar/nav";
import product from "../productlist/list.js"
import "./seafood.css"
export default function Seafood() {
    let i=[]
let data=product.map((va)=>{

   if(va.category=="SeaFood"){
        i.push(va)

    }
})
let d=i.map((item ,id)=>{
  return(
    <FishCard key={id} val={item}/>
  )
})
   
    return(
        <div>
            <Nav/>
              <div className="banner" >
               
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
