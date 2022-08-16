import { useSelector } from "react-redux";
import Item from "./item";

function Cart() {
    const {items = [], totalItem, totalPrice} = useSelector((state) => state.products.cart);

    return (
        <div
            class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                { items.map(product=> <Item product={product} />) }
                { 
                    items.length === 0 && 
                        <div class="flex justify-center items-center text-center border-b-2">
                            <div class="text-lg font-semibold py-4">
                                <p>Empty Cart</p>
                            </div>
                        </div> 
                }
                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total Item</p>
                        <p class="text-5xl">{totalItem}</p>
                    </div>
                </div>
            </div>
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total Price</p>
                        <p class="text-5xl">{totalPrice.toLocaleString('en-BN')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;