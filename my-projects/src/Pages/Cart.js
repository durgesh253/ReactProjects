import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../reduxd/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (cartId) => {
    dispatch(remove(cartId));
  };

  return (
    <>
      <h3>Cart</h3>
      <div className='container '>
        <table className='w-100'>
          
          <thead>
            <tr >
              <th style={{fontSize: "30px"}}>Product</th>
              <th style={{fontSize: "30px"}}>Product Name</th>
              <th style={{fontSize: "30px"}}>Price</th>
              <th style={{fontSize: "30px"}}>Remove</th>
            </tr>
          </thead>
          <hr />
          <tbody className=''>
            {cartData.map((cartItem, index) => (
              <tr key={index}>
                <td><img src={cartItem.image} style={{width:"50px"}} alt={cartItem.id} /></td>
                <td>{cartItem.name}</td>
                <td >{cartItem.price}</td>
                <td className=''>
                  <button className='btn btn-danger btn-sm mt-2' onClick={() => handleRemove(cartItem.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <Link  className='btn btn-dark mb-3' to='/globalproduct'> explore product</Link>
      </div>
    </>
  );
}

export default Cart;
