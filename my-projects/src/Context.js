import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import data from "./data";


const url = 'https://course-api.com/react-useReducer-cart-project'
const Appcontext = React.createContext();

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
        dispatch({type : 'CLEAR_CART'});
  }

  const removeitem = (id) => {
    dispatch({type : 'REMOVE', payload : id})
  }

  const increase = (id) => {
    dispatch({type: 'INCRESE',payload : id})
  }
  const decrease = (id) => {
    dispatch({type: 'DECRESE',payload :  id})
  }
  const fetchData = async() => {
     const response = await fetch(url);
     const cart = await response.json();
     dispatch({type:"CART-ITEMS", payload:cart})
  }

  useEffect(() => {
   fetchData();
  },[])


  return (
    <Appcontext.Provider value={{ ...state, clearCart,removeitem, increase,decrease}}>
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { Appcontext, AppProvider };
