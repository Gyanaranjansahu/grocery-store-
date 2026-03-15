import "./hero.css"
export default function Hero() {
    return(
        <section>
            <div id="content">
                <div className="text">
                    <span id="best">Export Best Quality..</span>
                    <h1>Tasty Organic <br />
                    <span className="uniq" style={{color:"orangered"}}>Fruits</span> & <span className="uniq" style={{color:"orangered"}}> Veggies </span><br /> In Your City</h1>
                    <br />
                    <p>Brand for a high content beneficial substances,
                    Our products are  <br />all fresh and healthy</p>
                    <button className="shop">Shop Now</button>
                </div>
            </div>
            <div id="image">
                <div className="img-container">

                </div>
            </div>
        </section>
    )
};
