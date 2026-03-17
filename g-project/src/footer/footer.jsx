import "./footer.css"
import { IoIosArrowForward } from "react-icons/io";
export default function Footer() {
    return (
        <footer>

            <div className="first-bar">
                 <span id="last-logo">
                    Gr<span style={{ color: "orange" }}>O</span>cify
                </span>
                <p>Bred for a high content of beneficial substances.Our products are all fresh and healthy.</p>
                <br />
                <p>2026© All Right Reserved</p>
            </div>
                <div className="second-bar">
                    <div className="company" >
                        <h5>Company</h5>
                        <p><a style={{textDecoration:"none"}} href="">About</a></p>
                        <p><a style={{textDecoration:"none"}} href="">FAQ's</a></p>
                    </div>
                    <div className="company">
                        <h5>Support</h5>
                        <p ><a style={{textDecoration:"none"}} href="">Support center</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Feedback</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Contact us</a></p>
                    </div>
                </div>
                <div className="third-bar">
                     <div className="company">
                        <h5>Stay Connected</h5>
                       <p>Questions or Feedback? we'd love to hear from you.</p>
                       <div className="inputs">
                        <input type="email" name="email" id="email" placeholder="Email address" />
                        <span style={{color:"white", fontSize:"15px", cursor:"pointer"}} id="send"><IoIosArrowForward /></span>
                       </div>
                    </div>
                </div>
             
        </footer>
    )
};
