import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCocktailDetail } from '../redux/cocktailSlice';
import { useNavigate } from 'react-router-dom';

function Coktail() {


const {loading , cocktilDetails} = useSelector((state) => state.cocktail);

const [searValue , setSearchvalue] = useState("apple");
const distpatch = useDispatch();

const navigate = useNavigate();
  useEffect(() => {
    distpatch(getCocktailDetail(searValue));

  },[searValue])
 
  return (
    <div>
      <h1>cocktails</h1>
      <input type="text"
      placeholder='search here'
      value={searValue}
      onChange={(e) => setSearchvalue(e.target.value)}
       />
       {
        loading && <h2>Loading .....</h2>
       }
      <div className='row py-5'>
      {
        cocktilDetails.map((item) => {
         return (
          <>
          <div className='col-md-3' style={{cursor : "pointer"}}  onClick={() => navigate(`/coktails/${item.idDrink}`)}>
            <div className='card'>
              <img src={item.strDrinkThumb} alt="" />
            </div>
            <div className='card-body'>
              <h3>{item.strDrink}</h3>
            </div>
          </div>
          </>
         )
        })
      }
      </div>
      
    </div>
  )
}

export default Coktail

