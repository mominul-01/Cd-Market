import React from 'react';
import './Product.css'
const Product = (props) => {
   
    const { name, img, price, ratings, seller ,shipping} = props.product;
    
    return (
        <div className='product'>
           
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price :{price} </p>
                <p><small>Seller : { seller}</small></p>
                <p><small>Ratings : {ratings} Start </small></p>
                <p><small>Shipping: {shipping} </small></p>
            </div>
            <button onClick={ () => props.handelAddToCart(props.product)}
                className='cart-btn'>
                <p>Add to Cart</p>
            </button>
};

export default Product;