import { FaHeart, FaPlus } from "react-icons/fa";

export default function Cards({value}) {
    return(
       <div style={{gap:"1rem", display:"flex", alignItems:"center", justifyContent:"center", padding:"25px", position:"sticky", zIndex:"-1",
        boxShadow:"1px 1px 4px rgba(0,0,0,0.1)", borderRadius:"5px", background:"wheat"
        }  }>
       <div className="se" style={{display:"flex",flexDirection:"column"}}>
         <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"4rem" }}>
            <span><FaHeart/></span>
            <span style={{ display:"flex", alignItems:"center",
                justifyContent:"center", color:"white", background:"orangered", fontSize:"smaller", padding:"5px", borderRadius:"5px"
            }}> <FaPlus/> </span>
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
