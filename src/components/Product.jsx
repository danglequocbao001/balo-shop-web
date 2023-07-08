import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action';
const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch=useDispatch();
    const addProduct=(product)=>{
        dispatch(addItem(product));
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
        }
        getProduct()
    }, [])
    const Loading = () => {
        return (
            <div>
                ...Loading
            </div>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} width="400px " height={400} />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black'>{product.category}</h4>
                    <h1 className='display-5 fw-bolder'>{product.title}</h1>
                    <p>
                        Rating{product.rating && product.rating.rate }
                    </p>
                    <h3 className='my-4'>${product.price}</h3>
                    <p>{product.description}</p>
                    <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>Add to Cart</button>
                    <Link to="/cart" className='btn btn-outline-dark mx-3'>Go to Cart</Link>
                </div>
            </>
        )
    }
    return (
        <div className='container py-5'>
            <div className='row py-5'>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    );
}

export default Product;
