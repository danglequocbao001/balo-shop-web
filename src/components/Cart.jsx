import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem, addItem } from '../redux/action';
import { Link } from 'react-router-dom';
const Cart = () => {
    const state = useSelector((state) => state.HandleCart);
    console.log(state);
    console.log(state.length);
    const dispatch = useDispatch()
    const handleAdd = (item) => {
        dispatch(addItem(item))
    }
    const handleDel = (item) => {
        dispatch(deleteItem(item))
    }
    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }
    const cartItems = state.map((product)=>{
        return(
            <div className='px-4 my-5 bg-light rounded-3 py-5' key={product.id}>
                    <div className="container py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={product.image} alt={product.title} width="200px" height="180px"></img>
                            </div>
                            <div className='col-md-4'>
                                <h3>{product.title}</h3>
                                <p className="lead fw-bold">
                                    {product.qty} X ${product.price} = $
                                    {product.qty * product.price}
                                </p>
                                <button
                                    className="btn btn-outline-dark me-4"
                                    onClick={() => handleDel(product)}
                                >
                                    -
                                </button>
                                <button
                                    className="btn btn-outline-dark"
                                    onClick={() => handleAdd(product)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    })
        
    
    const buttons = () => {
        return (
          <>
            <div className="container">
              <div className="row">
                <Link
                  to="/checkout"
                  className="btn btn-outline-dark mb-5 w-25 mx-auto"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        );
      };
    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && cartItems}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;
