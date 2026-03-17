
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
  import { GiHamburgerMenu } from "react-icons/gi";
import "./nav.css"
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
export default function Nav() {
const[data,setData]=useState(false)



    return (
        <header>
            <nav>
                <span id="logo">
                    Gr<span style={{color:"orange"}}>O</span>cify
                </span>
                {/* list item */}
                <div className="main">
                    <ul className={data?"block":""} style={{
                        listStyleType:"none",
                        textDecoration:"none"

                    }}>
                        <li><a href="/">Home </a></li>
                        <li><a href="/about">About Us </a></li>
                        <li><a href="/process">Process </a></li>
                        <li><a href="/contact"> Contact Us</a></li>
                    </ul>
                </div>
                {/* searchbar */}
                <div className="third">
                    <div className="search">
                        <input className="input" type="text" name="text" id="text" placeholder="Search.." />
                       <p id="s"> <IoSearchOutline/></p>
                    </div>
                    {/* icons */}
                    <div className="icons">
                        <span> <FaHeart /> </span>
                        <span> <IoBagHandle /> </span>
                    </div>
                    {/* humberger */}
                    <span className="h"  onClick={()=>setData(!data)} style={{color:"black", cursor:"pointer"}} id="humberger" >{data?<FaTimes/>:<GiHamburgerMenu/>}</span>
                        
                        
                         
                </div>

            </nav>
        </header>
    )
};
