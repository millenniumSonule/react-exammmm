import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import axios from 'axios';

const Plp = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const responce_product = await axios.get('https://fakestoreapi.com/products');
            setProducts(responce_product.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="container">
            <div className="nav">
                <Navbar />
            </div>
            <div className="input-box">
                {products.map((item, index) => (
                    <div key={index} className="list-products">
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                    </div>
                ))}
            </div>
        </div> 
    )
}

export default Plp;