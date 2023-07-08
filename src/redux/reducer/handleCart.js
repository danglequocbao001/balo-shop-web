const cart = [];
const HandleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //check product exist
      const exist = state.find((x) => x.id === product.id);
      //increase quanlity product
      if (exist) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify());

    case "DELETEITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    // return{
    //     ...state,
    //     cart:state.cart.filter((x,index) => index !== action.payload),
    // }
    default:
      return state;
  }
};

export default HandleCart;
// case "ADDITEM":
//     const item=state.find((x)=>x.id===product.id)
//     const inCart = state.cart.find((item) =>
//     item.id === action.payload.id ? true : false
// );
// return {
//     ...state,
//     cart: inCart
//         ? state.cart.map((item) =>
//             item.id === action.payload.id
//                 ? {
//                     ...item,
//                     qty: item.qty + 1,
//                 }
//                 : item
//         )
//         : [...state.cart, {
//             ...item, qty: 1,
//         }],
// };
