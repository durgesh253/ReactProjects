

const reducer = (state,action) => {
    if(action.type === 'CLEAR_CART'){
        return {...state , cart:[]}
    }
    if(action.type === 'CART-ITEMS'){
        return {...state,cart:action.payload}
    }

    if(action.type === 'REMOVE'){
        return {
            ...state,
            cart : state.cart.filter((item) => item.id !== action.payload)
        }
    }
    if(action.type === 'INCRESE'){
        
            let tempcart = state.cart.map((Item) => {
                if(Item.id === action.payload){
                    return{...Item, amount : Item.amount + 1}
                }
                return Item;
            })
            return {...state , cart :tempcart}
       
     }
     if(action.type === 'DECRESE'){
        
        let tempcart = state.cart.map((Item) => {
            if(Item.id === action.payload){
                return{...Item, amount : Item.amount - 1}
            }
            return Item;
        })
        .filter((Item) => Item.amount !== 0)
        return {...state , cart :tempcart}
   
 }
}

export default reducer