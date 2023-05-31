import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
    }

    let tax = parseFloat((totalPrice * 0.1).toFixed(2)); 

    let grandTotal = (totalPrice + shippingCharge + tax).toFixed(2);


    return (
        <div className='cart'>
            <h1>Order Summary</h1>
                
            <h3>Selected Item : {quantity} </h3>
            <p>Total Price:{totalPrice} </p>
            <p>Total Shipping Charge: { shippingCharge}</p>
            <p>Tax: {tax} </p>
            <h3>Grand Total: {grandTotal} </h3>

            <button>
                <p>Clear Cart</p>
            </button>
            <button>
                <p>Review Order</p>
            </button>
        </div>
    );
};

export default Cart;