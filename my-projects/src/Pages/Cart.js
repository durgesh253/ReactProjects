import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../reduxd/CartSlice'

function Cart() {

const cartData =  useSelector((state) => state.cart)
const distpatch =  useDispatch()

const handleRemove =(cartiid) => {
  distpatch(remove(cartiid))
}
  return (
    <>
    <h3>Cart</h3>

     <div className='conatiner'>
      
      {
        cartData.map((carti) => {
         
          return(
          <div className='card '>
            <img src={carti.image} alt="" />
            <div className='card-body'>
              <h3>{carti.name}</h3>
              <h3>{carti.price}</h3>
              <button className='btn btn-danger' onClick={() =>handleRemove(carti.id)}>Remove</button>
            </div>
          </div>
          )
        })
      }
      </div>      
    </>
  )
}

export default Cart
