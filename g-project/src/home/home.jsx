import Discount from "../discount/discount.jsx";
import Hero from "../hero/hero.jsx";
import Nav from "../navbar/nav.jsx";
import Product from "../product/product.jsx";
import Section from "../section/section.jsx";
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
        </>
    )
};
