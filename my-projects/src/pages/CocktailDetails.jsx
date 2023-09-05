import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getoneCocktail } from '../redux/cocktailSlice';
import { useDispatch, useSelector } from 'react-redux';

function CocktailDetails() {
    const {id} = useParams();
   const  distpactch = useDispatch()

  const { oneCocktail ,loading} = useSelector((state) => state.cocktail)

    useEffect(() =>{
       distpactch(getoneCocktail(id));
    },[])
    if(loading) {
        return <h2>Loading......</h2>
    }
    
  return (
    <div>
      <h1>Cocktail Details</h1>
      <h2>Cocktaill id : {id}
      </h2>
      <img src={oneCocktail.strDrinkThumb} alt="" style={{height : "400px" , width : "500px"}}/>
      <p>{oneCocktail.strInstructions}</p>
    </div>
  )
}

export default CocktailDetails
