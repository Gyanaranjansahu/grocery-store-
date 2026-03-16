import "./discount.css"
export default function Discount(params) {
    return(
        <section className="discount-container" >
            <div className="percent">20%</div>
            <div className="order">
                <h2 className="bif">First Order <br /> Discount!</h2>
                <p>Enjoy an exclusive first order discount on our grocery website! <br /> Shop fresh
                    essentials and save big on your first purchase. <br />Fast delivery and quality guaranteed
                </p>
                <button className="get">Get a Discount!</button>
            </div>
        </section>
    )
};
