import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function CocktailDetails() {
   
   const {id} = useParams()
   const [drinkDetail, setDrinkDetail] = useState({});
   const [loading , setloading] = useState(true);
    const navigate = useNavigate();
    console.log();


   function fetcData(){
    // setloading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((resp) => resp.json())
    .then((data) => {
        setDrinkDetail(data.drinks[0]);
        setloading(false);
    });

   }

   useEffect(() =>{
   fetcData();
   
   },[]);

   if(loading){
    return <h1>Loading.......</h1>
   }
  return (
    <div>
        
        <h2 className='text-center text-bg-danger'>Cocktail Details page</h2>
        {/* <Link to="/cocktail" className='btn btn-dark'>Back</Link> */}

        <button className='btn btn-dark btn-sm' onClick={() => navigate('/cocktail')}>Back</button>
             <h4>Product Id:{id}</h4>
        <div className='row'>
            <div className='col-md-3 m-4'>
                <div className='card p-3'>
                <img src={drinkDetail.strDrinkThumb} alt="" />
                <h2>Drink Name: {drinkDetail.strDrink}</h2>
                <h3>Glass Name: {drinkDetail.strGlass}</h3>
                
                </div>
                <div className='col-md-8'>
                    <p></p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CocktailDetails
