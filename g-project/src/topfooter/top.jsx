import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import customer1 from "../assets/customer1.jpg"
import customer2 from "../assets/customer2.jpg"
import customer3 from "../assets/customer3.jpg"
import customer4 from "../assets/customer4.jpg"
import "./top.css"
import { useRef } from "react";
export default function Top() {
    let scrollRef = useRef()
    function right() {
        scrollRef.current.scrollBy({
            left: 285,
            behavior: "smooth",
        })
    }
    function left() {
        scrollRef.current.scrollBy({
            left: -280,
            behavior: "smooth",
        })
    }
    let collect = reviews.map((i,id) => {
        return (
            <div key={id} style={{  boxShadow:"2px 2px 5px rgba(0,0,0,0.3)",display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", 

                border:"1px solid white", height:"26vh", padding:"40px", width:"65%"
            }}>
                {/* flex center column */}
                <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", border:"1px solid white", padding:"10px", alignSelf:"flex-start", margin:"5px", width:"110%"}}>
                    {/* flex center */}
                    <div className="im"  style={{ display: "flex", alignItems: "center", justifyContent: "center", height:"50px", width:"50px", alignSelf:"flex-start", border:"3px solid brown", padding:"2px", marginRight:"5px", borderRadius:"50%"}}>
                        <img src={i.image} alt="" width="30" style={{height:"100%", width:"100%", borderRadius:"50%"}}/>
                    </div>
                    <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        {/* flex center column */}
                        <p style={{fontWeight:"bold"}}>{i.name}</p>
                        {/* big font  */}
                        <p>{i.role}</p>
                        <p>{
                            Array(i.rating).fill().map((val,id) =>
                                <span key={id}>⭐</span>
                            )
                        }</p>
                    </div>
                </div>
                <div className="para"  style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",  textAlign:"center"}}>
                    {/* flex center text-center  */}
                    <p>
                        {i.review}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <section className="rating">
            <div style={{ margin: "10px" }} > <h4 id="orange"> <span style={{ color: "orangered" }}>Customers</span> Saying</h4></div>
            <div className="ic" >
                <button className="arrow" onClick={left} ><FaArrowLeft /></button>
                <button className="arrow" onClick={right} ><FaArrowRight /></button>

            </div>
            <div className="reviews" ref={scrollRef}>
                {collect}
            </div>
        </section>
    )
};
const reviews = [
    {
        id: 1,
        name: "Emily Johnson",
        role: "Food Blogger",
        rating: 5,
        image: customer1,
        review:
            "FreshBasket is my go-to store for all grocery needs. "
    },
    {
        id: 2,
        name: "Michael Smith",
        role: "Chef",
        rating: 4,
        image: customer2,
        review:"Great quality groceries and very quick delivery. "
    },
    {
        id: 3,
        name: "Sophia Lee",
        role: "Nutritionist",
        rating: 5,
        image: customer3,
        review:
            "Amazing service! I always find healthy and organic products easily."
    },
    {
        id: 4,
        name: "David Brown",
        role: "Restaurant Owner",
        rating: 4,
        image: customer4,
        review:
            "Reliable grocery delivery with good product quality."
    },
    {
        id: 1,
        name: "Emily Johnson",
        role: "Food Blogger",
        rating: 5,
        image: customer1,
        review:
            "FreshBasket is my go-to store for all grocery needs. "
    },
    {
        id: 2,
        name: "Michael Smith",
        role: "Chef",
        rating: 4,
        image: customer2,
        review:"Great quality groceries and very quick delivery. "
    },
    {
        id: 3,
        name: "Sophia Lee",
        role: "Nutritionist",
        rating: 5,
        image: customer3,
        review:
            "Amazing service! I always find healthy and organic products easily."
    },
    {
        id: 4,
        name: "David Brown",
        role: "Restaurant Owner",
        rating: 4,
        image: customer4,
        review:
            "Reliable grocery delivery with good product quality."
    },
     {
        id: 3,
        name: "Sophia Lee",
        role: "Nutritionist",
        rating: 5,
        image: customer3,
        review:
            "Amazing service! I always find healthy and organic products easily."
    },
    {
        id: 4,
        name: "David Brown",
        role: "Restaurant Owner",
        rating: 4,
        image: customer4,
        review:
            "Reliable grocery delivery with good product quality."
    }
];