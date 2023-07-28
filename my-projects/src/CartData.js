import React from 'react'
import { useGlobalContext } from './Context'
import CartItem from './CartItem';

function CartData() {
    const {total,cart,clearCart} = useGlobalContext();
  return (
    <>

<section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {
            cart.map((items) => {
                return <CartItem  key={items.id} {...items}/>
            })
        }
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn btn-outline-danger btn-xl' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
    </>
  )
}

export default CartData
