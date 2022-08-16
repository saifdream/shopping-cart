import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsTypes";

const initialState = {
    list: [
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
    ],
    cart: {
        items: [],
        totalItem: 0,
        totalPrice: 0,
    }
};

const productReducer = (state = initialState, action) => {
    let items = [...state.cart.items];
    let totalItem = state.cart.totalItem;
    let totalPrice = state.cart.totalPrice;

    const index = items && items.findIndex(item => {
        return item.id === action.payload.id;
    });

    switch (action.type) {
        case ADD_TO_CART:
            if (index === -1) {
                // const products = [...state.list];
                // const productIndex = products && products.findIndex(item => {
                //     return item.id === action.payload;
                // });
                // const product = products[productIndex];

                const product = action.payload;
                items = [...items, {...product, qty: 1}];
                totalItem += 1;
                totalPrice += product.price;
            } else {
                let item = items[index];
                if (item.max > item.qty){
                    items[index]['qty'] += 1;
                    totalItem += 1;
                    totalPrice += item.price;
                }
            }

            return {
                ...state, 
                cart: {
                    ...state.cart,
                    items,
                    totalItem,
                    totalPrice
                }
            };

        case REMOVE_FROM_CART:
            if (index !== -1) {
                let item = items[index];
                if(item.qty === 1)
                    items.splice(index, 1);
                else
                    item.qty -= 1;

                totalPrice -= item.price;
            }

            return {
                ...state, 
                cart: {
                    ...state.cart,
                    items,
                    totalItem: totalItem - 1,
                    totalPrice
                }
            };

        default:
            return state;
    }
};

export default productReducer;