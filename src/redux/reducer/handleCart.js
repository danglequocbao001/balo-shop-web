const cart = [];

const HandleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_PRODUCT":
      const isExist = state.find((x) => x.ma_mh === product.ma_mh);
      if (isExist) {
        return state.map((item) =>
          item.ma_mh === product.ma_mh
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          },
        ];
      }
    case "DELETE_PRODUCT":
      const isExist1 = state.find((x) => x.ma_mh === product.ma_mh);
      if (isExist1.quantity === 1) {
        return state.filter((x) => x.ma_mh !== isExist1.ma_mh);
      } else {
        return state.map((x) =>
          x.ma_mh === product.ma_mh ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
    case "CLEAR_PRODUCT":
      state = [];
      return state;
    default:
      return state;
  }
};

export default HandleCart;
