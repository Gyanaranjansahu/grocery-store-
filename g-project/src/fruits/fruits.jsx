import Footer from "../footer/footer";
import Nav from "../navbar/nav";
import "./fruit.css"
import product from "../productlist/list.js"
import FruitCard from "../fruitcard/fruitcard.jsx";

export default function Fruits(params) {
     let i=[]
let data=product.map((va)=>{

   if(va.category=="Fruits"){
        i.push(va)

    }
})
let d=i.map((item ,id)=>{
  return(
    <FruitCard key={id} val={item}/>
  )
})
    return(
        <div>
           <Nav/>
           <div className="banners">

           </div>
            <div style={{background:"white", display:"flex", justifyContent:"center", margin:"10px", gap:"1rem", flexWrap:"wrap"}} >
            {d}
           </div>

           <div className="fo"><Footer/></div>
        </div>
    )
};
