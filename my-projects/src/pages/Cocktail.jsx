import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Cocktail() {
const [drinks,setDrinks] = useState([]);

 function fetchcoctail(){
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
  .then((resp) => resp.json())
  .then((data) => setDrinks(data.drinks));
 }

 useEffect(() =>{
    fetchcoctail();
 },[]);
  return (
    <div className='row'>
     <h2 className='text-bg-info text-center'>Cocktail</h2>
     {drinks.map((item) =>{
      const{strDrink,strDrinkThumb,strCategory,idDrink} = item;
      return (
        <div className="col-md-3 mb-4" key={idDrink}>
          <div className="card p-3 m-3 shadow">
            <img src={strDrinkThumb} alt="" />
            <div className="card-body">
              <h6>{strDrink}</h6>
              <p>{strCategory}</p>
              <Link to={`/cocktails/${idDrink}`}  className='btn btn-dark btn-sm'>View</Link>
            </div>
          </div>
        </div>
      );
     })}
    </div>
  )
}

export default Cocktail
