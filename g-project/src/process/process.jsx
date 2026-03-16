import { TbCircleNumber1Filled,TbCircleNumber2Filled,TbCircleNumber3Filled,TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlantDuotone } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { FiTruck } from "react-icons/fi";
import "./process.css"
export default function Process(params) {
let items=about.map((val,id)=>{
    return(
        <div key={id} id="main" style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }} className={val.id%2==0?"top":""}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", border:"2px dotted black", height:"max-content", width:"max-content", alignSelf:"center", borderRadius:"50%",padding:"5px" }}>
                <span style={{display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid black",  color:"white", fontSize:"30px" 
                    ,borderRadius:"50%", background:"black"
                }}>{val.number}</span>
            </div>
            <div  style={{display:"flex", alignItems:"center", justifyContent:"center",  padding:"10px"}}>
                <span style={{padding:"10px", background:"orangered", fontSize:"15px", borderRadius:"50%", margin:"0px 5px" ,display:"flex", alignItems:"center", justifyContent:"center", color:"white"}}>{val.icon}</span>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                 <span style={{fontWeight:"bold"}}>{val.title}</span>
                <span style={{fontSize:"small"}}>{val.about}</span>
                </div>
            </div>
        </div>
    )
})
    return(
        <section id="set">
            <div id="head"> <h2 > <span style={{ color: "orangered"  }}>Our </span>Process</h2></div>
            <div className="process">
                {items}
            </div>
        </section>
    )
};
let about=[
    {
        id:1,
        number:<TbCircleNumber1Filled />,
        icon:<PiPlantDuotone/>,
        title:"Sourcing",
        about:"It is a long established fact that a reader"
    },
      {
        id:2,
        number:<TbCircleNumber2Filled />,
        icon:<FaBuilding/>,
        title:"Manufacturing",
        about:"It is a long established fact that a reader"
    },
      {
        id:3,
        number:<TbCircleNumber3Filled />,
        icon:<SlBadge/>,
        title:"Quality Control",
        about:"It is a long established fact that a reader"
    },
      {
        id:4,
        number:<TbCircleNumber4Filled />,
        icon:<FiTruck/>,
        title:"Logistics",
        about:"It is a long established fact that a reader"
    },
]