import React, { useContext } from 'react'
import { Appcontext } from './App'

function Courses() {
const {couseData,cart,setCart} = useContext(Appcontext);

function addtoCart(item) {
    console.log("hii",item);
    
    const newdata = cart.find((singlecart) => singlecart.id === item.id);

    if(newdata){
  alert("you data aleredy in cart")
    }else{
        setCart([...cart , item]);
    }
}
  return (
    <div className='container'>
      <h2>COURSES</h2>
      <div className='row'>
        {couseData.map((item) => {
            const {id,name,desp,price,cart} = item;
            return(
               <div className='col-md-4'>
                <div className='card shadow m-2'>
                    <div className='card-body' key={id}>
                        <h2>{name}</h2>
                        <button className='btn btn-warning'>GO</button>
                        <button className='btn btn-primary ms-2' onClick={() => addtoCart(item)}>ADD TO CART</button>
                    </div>
                </div>
               </div>
            )
        })}

      </div>
    </div>
  )
}

export default Courses
