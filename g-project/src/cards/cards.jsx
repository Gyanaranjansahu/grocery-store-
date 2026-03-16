import { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import "./card.css"
export default function Cards({ value }) {
    const [change, setChange] = useState(false)
    return (
        <div style={{
            gap: "1rem", display: "flex", alignItems: "center", justifyContent: "center", padding: "25px",  zIndex: "0",
            boxShadow: "1px 1px 4px rgba(0,0,0,0.1)", borderRadius: "5px", background: "wheat"
        }}>
            <div className="se"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4rem"
                }}>
                    <span style={{
                         display: "flex", alignItems: "center", justifyContent: "center", padding: "4px", cursor: "pointer",
                    }} onClick={() => setChange(!change)}    className={change ? "effect":"remove"}><FaHeart /></span>
                    <span style={{
                        display: "flex", alignItems: "center", cursor: "pointer",
                        justifyContent: "center", color: "white", background: "orangered", fontSize: "smaller", padding: "5px", borderRadius: "5px"
                    }}> <FaPlus /> </span>
                </div>
                <div >
                    <img loading="preload" src={value.Image} alt="" width="90" />
                </div>
                <span>{value.name}</span>
                <span>{value.price}</span>
                <button style={{
                    border: "none", borderRadius: "4px", background: "orangered", padding: "3px 5px", color: "white ", display: "flex",
                    alignItems: "center", justifyContent: "center", cursor:"pointer"
                }}>Shop Now</button>
            </div>
        </div>
    )
};
