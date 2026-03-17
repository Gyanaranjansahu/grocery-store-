import "./section.css"
import first from "../assets/fruits-and-veggies.png"
import second from "../assets/dairy-and-eggs.png"
import third from "../assets/meat-and-seafood.png"
import { preload } from "react-dom"
import { Link } from "react-router-dom"
export default function Section() {
    let menu = store.map((val, id) => {
        return (
            <div style={{ border: "1px solid black", display: "flex", flexDirection: "column", height: "240px", alignItems: "center", justifyContent: "center", borderRadius: "10px", border: "none", boxShadow: "5px 5px 10px rgba(0,0,0,0.2)" }}>
                <div style={{ flexWrap: "wrap", padding: "20px", textAlign: "center", width: "400px" }} ><img src={val.image} loading={preload} width="200" alt="" />

                    <h3>{val.name}</h3>
                    <p>{val.data}</p>
                    <button id="btn" style={{ left: "", marginTop: "5px" }}>
                        <Link to={val.path} style={{textDecoration:"none", color:"white"}}>See All</Link>
                    </button>
                </div>

            </div>
        )
    })
    return (
        <section className="category">
             <div  > <h4 id="orange"> <span style={{ color: "orangered" }}>Shop </span>by Category</h4></div>
            <div className="shop-category" >
            <div className="card-container" >
                <div className="card">{menu}</div>
            </div>
        </div>
       </section >
    )
}
let store = [
    {
        path:"/fruits",
        "id": 1,
        image: first,
        "name": "Fruits & Veggies",
        "data": "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables."

    },
    {
        path:"/dairy",
        "id": 2,
        "image": second,
        "name": "Dairy & Eggs",
        "data": "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses."

    },
    {
        path:"/meat",
        "id": 3,
        "image": third,
        "name": "Meat & SeaFood",
        "data": "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more."

    },
]
