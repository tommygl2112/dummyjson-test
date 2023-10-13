import React, { useEffect } from 'react';
import { useLimitProducts } from '../../hooks/products/useLimitProducts';
import { Link, useNavigate } from 'react-router-dom';
import './ListPage.css';

export default function ListPage() {
    const { getLimitedProducts, products } = useLimitProducts();

    useEffect(() => {
        getLimitedProducts(10);
    }, []);

    return (
        <>
            <h1 className='page-title'>Lista de Productos</h1>
            <div className='product-card-container'>
                {products ? products?.products?.map((product) => (
                    <Link
                        to={`/product/${product.id}`}
                        state={{ product: product }}
                        key={product.id}
                        className='product-card'
                    >
                        <img src={product.thumbnail} alt={product.title} className='product-image' />
                        <div className='product-details'>
                            <h2 className='product-title'>{product.title}</h2>
                            <p className='product-description'>{product.description}</p>
                            <p className='product-price'>Precio: ${product.price}</p>
                            <p className='product-stock'>Stock: {product.stock} unidades</p>
                        </div>
                    </Link>
                )) : null}
            </div>
        </>
    );
}
