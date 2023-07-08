import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductData } from '../reduxd/FirstSlice';
import FormatPrice from './FormatPrice';
import { useNavigate } from 'react-router-dom';



function FeutureProducts() {
  const{futureProducts} = useSelector((state) => state.counter);
   const dispatch = useDispatch();
   console.log(futureProducts);

  const navigate = useNavigate();

   useEffect(() => {
    dispatch(getproductData())
   },[])
  return (
    <div className='container'>
        <div className="row py-5">
        {
            futureProducts.map((curElem) => {
              const {name,image,price,id} = curElem;
                return (
                  <div
                  className="col-md-4 mb-3"
                  onClick={() => navigate(`/singleproduct/${id}`)}
                  
                >
                  <div className="card shadow" style={{ cursor: "pointer" }}>
                    <img src={image} className="w-100" alt="" />
                    <div className="card-body">
                      <h6 className="m-0">{name}</h6>
                      <p className="m-0" style={{ fontSize: "15px" }}>
                        {<FormatPrice price={price} />}
                      </p>
                    </div>
                  </div>
                </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default FeutureProducts
