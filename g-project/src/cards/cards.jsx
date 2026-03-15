import { FaHeart, FaPlus } from "react-icons/fa";

export default function Cards({value}) {
    return(
       <div style={{gap:"1rem", display:"flex", alignItems:"center", justifyContent:"center", padding:"25px", position:"sticky", zIndex:"-1" }  }>
       <div className="se" style={{display:"flex",flexDirection:"column"}}>
         <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <span><FaHeart/></span>
            <span> <FaPlus/> </span>
        </div>
        <div >
         <img src={value.Image} alt=""  width="90" />
        </div>
        <span>{value.name}</span>
        <span>{value.price}</span>
        <button style={{border:"none", borderRadius:"4px", background:"orangered", position:"absolute", bottom:"2px", left:"35px", padding:"3px 5px", color:"white "}}>Shop Now</button>
       </div>
       </div>
    )
};
