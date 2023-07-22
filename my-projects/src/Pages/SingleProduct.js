import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getproductDetails } from '../reduxd/FirstSlice';
import Myimages from './Myimages';
import { add } from '../reduxd/CartSlice';


function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, productDetails } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(getproductDetails(id));
  },[]);
  const handleadd = () => {
    dispatch(add(productDetails))
  }
  if (loading) {
    return <h2>Loading.....</h2>;
  }

  if (!productDetails) {
    return <h2>No product details available</h2>;
  }
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-6">
          <Myimages imge={productDetails.image} />
        </div>
        <div className="col-md-6">
          <h2>Name: {productDetails.name}</h2>
          <p>{productDetails.description}</p>
          <h4>Price: {productDetails.price}</h4>
          <h5>Avalibale :in Stock</h5>
          <h4 className='pt-2'> Comapny : {productDetails.company}
          </h4>
          <hr />
          <button className='btn btn-primary' onClick={() => handleadd(productDetails)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;