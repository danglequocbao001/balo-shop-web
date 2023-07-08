//add item to cart
export const addItem=(product)=>{
    return{
        type: "ADDITEM",
        payload:product,
    }
}
//delete item from cart
export const deleteItem=(product)=>{
    return{
        type: "DELETEITEM",
        payload:product,
    }
}