import { useSelector } from "react-redux";
import ProductItem from "./Item";

/* const products = [
    {
        id: 1,
        name: "Asus Vivobook X515MA",
        price: 35000,
        max: 20
    }, {
        id: 2,
        name: "Dell E1916HV 18.5 Inch",
        price: 9300,
        max: 35
    }, {
        id: 3,
        name: "Canon Eos 4000D 18MP",
        price: 36500,
        max: 72
    }
] */

function ProductList() {
    const products = useSelector((state) => state.products.list);

    return (
        <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            { products.map(product => <ProductItem product={product}/>) }
        </div>
    )
}

export default ProductList;