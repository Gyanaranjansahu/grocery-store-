import Discount from "../discount/discount.jsx";
import Footer from "../footer/footer.jsx";
import Hero from "../hero/hero.jsx";
import Nav from "../navbar/nav.jsx";
import Process from "../process/process.jsx";
import Product from "../product/product.jsx";
import Section from "../section/section.jsx";
import Top from "../topfooter/top.jsx";
import Value from "../value/value.jsx";

export default function Home(params) {
    return(
       <>
        <Nav/>
        <Hero/>
        <Section/>
        <Value/>
        <Product/>
        <Discount/>
        <Process/>
        <Top/>
        <Footer/>
        </>
    )
};
