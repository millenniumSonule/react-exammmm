import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import axios from 'axios';

const Plp = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect (() => {
        fetchProducts();
    },[]);

    const fetchProducts = async ()=> {
        try{
            const responce_product = await axios.get('https://fakestoreapi.com/products');
            setProducts(responce_product);
        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="container">
            <div className="nav">
                <Navbar/>
            </div>
            <div className="input-box">
                {JSON.stringify(products.data.price)}
            </div>
        </div>
    )
}

export default Plp;