import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './ProductDetailStyle.css';
import { useUpdateProduct, } from '../../hooks/products/useUpdateProduct';
import { useDeleteProduct } from '../../hooks/products/useDeleteProduct';

function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state && location.state.product ? location.state.product : null;

    const [notification, setNotification] = useState('');

    const getLimitedProducts = useUpdateProduct();
    const deleteProduct = useDeleteProduct();

    const [productData, setProductData] = useState({
        title: product?.title || '',
        description: product?.description || '',
        price: product?.price || 0,
        stock: product?.stock || 0,
        thumbnail: product?.thumbnail || '',
        images: product?.images || [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    const handleEdit = async () => {
        const response = await getLimitedProducts(id, productData.title, productData.description, productData.price, productData.stock, productData.imageUrl, setNotification);
        console.log(response);
    };

    const handleDelete = async () => {
        const response = await deleteProduct(id);
        console.log(response);
    };

    return (
        <div className='main-container'>
            <p className="notification-succsess">{notification}</p>
            <div className="container">
                <h1 className="title">Editar Producto</h1>
                <div>
                    <label className="label">Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={productData.title}
                        onChange={handleInputChange}
                        className="input"
                    />
                </div>
                <div>
                    <label className="label">Descripción:</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleInputChange}
                        className="textarea"
                    />
                </div>
                <div>
                    <label className="label">Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        className="input"
                    />
                </div>
                <div>
                    <label className="label">Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={productData.stock}
                        onChange={handleInputChange}
                        className="input"
                    />
                </div>
                <div>
                    <label className="label">Imagen (URL):</label>
                    <input
                        type="text"
                        name="thumbnail"
                        value={productData.thumbnail}
                        onChange={handleInputChange}
                        className="input"
                    />
                </div>
                <div>
                    {productData.images && productData.images.length > 0 && (
                        productData.images.length === 0 ?
                            <img height={100} width={100} src={productData.images[0]} alt="Producto" />
                            :
                            productData.images.map(image => (
                                <img height={100} width={100} src={image} alt="Producto" />
                            ))
                    )}
                </div>
                <div className='buttons-container'>
                    <button type="submit" className="button" onClick={() => handleEdit()}>
                        Guardar Cambios
                    </button>
                    <button type="submit" className="delete-button" onClick={() => handleDelete()}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
