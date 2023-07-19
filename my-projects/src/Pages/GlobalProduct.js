import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getproductData, filterByCategory, filterCompany } from '../reduxd/FirstSlice';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import FormatPrice from '../components/FormatPrice';
import { Link, useNavigate } from 'react-router-dom';
import ListView from '../components/ListView';
import { add, remove } from '../reduxd/CartSlice';
import { setSearchData } from '../reduxd/FirstSlice';
import GridView from '../components/GridView';
import ProductListview from '../Pages/ProductListview';

function GlobalProduct() {
  const navigate = useNavigate();
  const { productData, loading, selectedCategory } = useSelector((state) => state.counter);
  const [value, setvalue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproductData());
  }, []);

  const handleCategoryChange = (category) => {
    dispatch(filterByCategory(category));
  };
  const handleComapnyChange = (event) => {
    const selectedCompany = event.target.value;
    dispatch(filterCompany(selectedCompany));
     
  }
  // Remove the following code as it is not needed
  // const handleSearch = (event) => {
  //   if (event.target.value) {
  //     const searchText = event.target.value;
  //     const matchProductData = productData.filter((items) =>{
  //       const {name} = items;
  //       return items.name.toLowerCase().includes(searchText.toLowerCase())
  //     });
  //     dispatch(setSearchData(matchProductData));
  //   }
  // };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2 mt-5">
            <form action="">
              <input
                type="text"
                placeholder="search"
                className="form-control"
                // onChange={handleSearch}
                value={value}
                onChange={(e) => setvalue(e.target.value)}
              />
            </form>
            <div className="mt-2">
              {/* Radio buttons */}
              {['mobile', 'laptop', 'watch', 'accessories'].map((curEle, index) => (
                <lable className="d-flex pt-2">
                  <input
                    key={index}
                    type="radio"
                    name='category'
                    value={curEle}
                    onClick={() => handleCategoryChange(curEle)}

                  />
                  {curEle}

                </lable>
              ))}
            </div>
            <div>
      <h3 className='pt-2'>Company</h3>
      <form action="">
        <select name="company" id="company" onChange={handleComapnyChange}>
          {['all','apple', 'samsung', 'dell', 'nokia', 'rolex', 'asus'].map((com, index) => {
            return (
              <option key={index} value={com}>{com}</option>
            );
          })}
        </select>
      </form>
    </div>
            
          </div>

          <div className="col-md-10">
            <div className="container">
              <div className="row">
                {productData &&
                  productData.map((item) => {
                    const { image, name, price, id } = item;
                    return (
                      <div
                        className="col-md-4 mt-5"
                        onClick={() => navigate(`/singleproduct/${id}`)}
                        key={id}
                      >
                        <div className="card shadow" style={{ cursor: 'pointer' }}>
                          <img src={image} className="w-100" alt="" />
                          <div className="card-body">
                            <h6 className="m-0">{name}</h6>
                            <p className="m-0" style={{ fontSize: '15px' }}>
                              <FormatPrice price={price} />
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalProduct;
