/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';

// import SkeletonLoading from '../skeleton/SkeletonLoading';
const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await res.clone().json())
                setFilter(await res.json())
                setLoading(false)
                console.log(filter);
            }
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            }
        }
        getProduct()
    }, [])
    const Loading = () => {
        return (
            <>
                {/* Cach 1 : */}
                {/* <div className='col-md-3'>
                    <Skeleton height={300} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={300} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={300} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={300} />
                </div> */}
                {/* Cach 2 : Custom*/}
                {/* <div className='mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-3'>All</button>
                    <button className='btn btn-outline-dark me-3'>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-3'>Woman's Clothing</button>
                    <button className='btn btn-outline-dark me-3'>Jewelery </button>
                    <button className='btn btn-outline-dark me-3'>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className="card h-100px text-center p-4"  >
                                <SkeletonLoading className="w-100%" height="100px"/>
                                <div className="card-body">
                                    <h5 className="card-title"><SkeletonLoading className="w-100%" height="10px" /></h5>
                                    <p className="card-text">$<SkeletonLoading className="w-100%" height="10px" /></p>
                                    <Link to="#" className="btn btn-dark">Buy Now</Link>
                                </div>
                            </div>

                        </div>
                    )
                })} */}
                {/* Cach 3: */}
                <div className='mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-3'>All</button>
                    <button className='btn btn-outline-dark me-3'>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-3'>Woman's Clothing</button>
                    <button className='btn btn-outline-dark me-3'>Jewelery </button>
                    <button className='btn btn-outline-dark me-3'>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className="card h-100px text-center p-4"  >
                                <Skeleton height={300} />
                                <div className="card-body">
                                    <h5 className="card-title"><Skeleton height={10} /></h5>
                                    <p className="card-text"><Skeleton height={10}  /></p>                                  
                                </div>
                            </div>

                        </div>
                    )
                })}
            </>
        )
    }
    const filterProduct=(cat)=>{
        const updateList=data.filter((x)=>x.category===cat);
        setFilter(updateList)
    }
    const ShowProduct = () => {
        return (
            <>
                <div className='mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-3' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("women's clothing")}>Woman's Clothing</button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("jewelery")}>Jewelery </button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className="card h-100px text-center p-4"  >
                                <img src={product.image} className="card-img-top" height="250px" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.substring(0, 11)}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-dark">Buy Now</NavLink>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </>
        );

    };
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Latest Products</h1>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}

export default Products;
