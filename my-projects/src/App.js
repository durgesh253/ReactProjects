import React, { useEffect, useState } from 'react';
import cart from './image/cart.png';

function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newitem, setNewitem] = useState(null); // Initialize as null for checking existence

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const result = await response.json();
      setData(result.drinks || []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      setCategory(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const handleSearch = (e) => {
    const searchterm = e.target.value.toLowerCase();
    setSearchData(searchterm);

    const filterSearch = data.filter((item) =>
      item.strDrink.toLowerCase().includes(searchterm)
    );
    setFilterData(filterSearch);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    const filteredData = data.filter((item) =>
      selectedCategory === '' || item.strCategory === selectedCategory
    );
    setFilterData(filteredData);
  };

  const addtoCart = (item) => {
    if (item) {
      setNewitem(item); // Update the new item state
    }
  };

  const drinksToRender = searchData ? filterData : data;

  return (
    <>
      <div className='search m-4 d-flex justify-content-between '>
        <input
          type="text"
          className='form-control w-50 border-5'
          value={searchData}
          onChange={handleSearch}
        />
       
        <div className='mt-2'>
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">All Categories</option>
            {category.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className='m-2 justify-content-end'>
          <img src={cart} alt="" />
          <span className='m-1 p-2 cartspan'>{data.length}</span>
        </div>
      </div>

      <div className="text-white text-center justify-content-center row m-5 gap-3 ">
        {drinksToRender.length > 0 ? (
          drinksToRender.map((item) => {
            return (
              <div key={item.idDrink} className="card d-flex">
                <div className="card-img">
                  <img src={item.strDrinkThumb} alt="" style={{ height: '100px', width: '160px' }} />
                </div>
                <div className="card-info">
                  <p className="text-title">{item.strDrink}</p>
                  <p className="text-body">{item.strGlass}</p>
                </div>
                <div className="card-footer">
                  <span className="text-title">{item.idDrink}$</span>
                  <div className="card-button" onClick={() => addtoCart(item)}>
                    <img src={cart} alt="cart" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}

export default App;
