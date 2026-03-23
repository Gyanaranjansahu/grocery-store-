import { FaHeart, FaLeaf, FaShieldVirus, FaTree } from "react-icons/fa"
import { FaShield } from "react-icons/fa6";
import veggies from "../assets/veggies.png"
import "./value.css"
export default function Value() {
    let data=collection.slice(0,2).map((val,id)=>{
        return(
           <div key={id} className="ma" style={{margin:"30px 0px", width:"290px", padding:'0px', flexDirection:"right" ,gap:"2rem"}}>
            <h2>{val.name}</h2>
            <div className="same" style={{  display:"flex", alignItems:"center", justifyContent:"center", margin:"20px", gap:"1rem", border:"none"}}>
                <span>{val.title}</span>
                <span className="a" style={{ display:"flex",alignItems:"center",justifyContent:"center", padding:"7px", margin:"5px", borderRadius:"50%",  color:"white"}}>{val.logo}</span>
            </div>
           </div>
        )
    })
     let data2=collection.slice(2).map((val,id)=>{
        return(
           <div key={id} className="ma" style={{margin:"30px 0px", width:"290px", padding:'0px', flexDirection:"right"}}>
            <h2>{val.name}</h2>
            <div className="same" style={{display:"flex", alignItems:"center", justifyContent:"center",margin:"20px"}}>
                <span>{val.title}</span>
                <span className="a" style={{ display:"flex",alignItems:"center",justifyContent:"center", padding:"7px", margin:"5px" , borderRadius:"50%"} }>{val.logo}</span>
            </div>
           </div>
        )
    })
    return(
        <section className="co" style={{ display:"flex", flexDirection:"column" }} >
            <div style={{margin:"10px"}} > <h4 id="orange"> <span style={{ color: "orangered" }}>Our </span>Values</h4></div>
            <div className="values-contain"  style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"2rem"}}>
                <div className="lefts" style={{ padding:"10px", gap:"1rem"}}>
                  {data}
                </div>
                {/* <div className="center-image" >
                    <div className="main-image">
                    </div>
                </div> */}
                 <div className="main-image">
                    </div>
                <div className="rights" style={{ padding:"10px" ,gap:"1rem"}}>
                    {data2}
                </div>
            </div>
        </section>
    )
};
let collection=[
    {
        id:1,
        logo:<FaHeart/>,
        name:"Trust",
        title:"It is a long established fact that a reader will be distracted by the readable."
    },  {
        id:2,
        logo:<FaLeaf/>,
        name:"Always Fresh",
        title:"It is a long established fact that a reader will be distracted by the readable."
    },  {
        id:3,
        logo:<FaShield/>,
        name:"Food Safety",
        title:"It is a long established fact that a reader will be distracted by the readable."
    },  {
        id:4,
        logo:<FaTree/>,
        name:"100% Organic",
        title:"It is a long established fact that a reader will be distracted by the readable."
    },
]