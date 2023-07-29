import { initial } from "lodash";
export const initialState = {
  basket: [],
  user: null
};

function reducer(state = initialState ,action){
  if(action.type === "ADD_TO_BASKET"){
    return {...state , 
               basket : [...state.basket , action.item]}
    }
  else if(action.type === 'REMOVE_FROM_BASKET'){
             console.log(action);
            const index = state.basket.findIndex(  
              (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
      
            if (index >= 0) {
              newBasket.splice(index, 1);
      
            } else {
              console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket!`
              )
            }

            return {
                      ...state,
                      basket: newBasket
                    }
  }
  else if(action.type === 'SET_USER'){
    return {...state , 
            user : action.user};
  }
  return state;
}
//Selector
export const getBasketTotal = (basket) => 
  basket.reduce((amount, item) => item.price + amount, 0);


// export function getBasketTotal(basket){
//    var amount = 0;
//    for(var i=0;i<basket.length;i++){
//        amount+=basket[i].price; 
//    }
// }

export default reducer;
// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };
    
//     case 'EMPTY_BASKET':
//       return {
//         ...state,
//         basket: []
//       }

//     case "REMOVE_FROM_BASKET":
//       const index = state.basket.findIndex(
//         (basketItem) => basketItem.id === action.id
//       );
//       let newBasket = [...state.basket];

//       if (index >= 0) {
//         newBasket.splice(index, 1);

//       } else {
//         console.warn(
//           `Cant remove product (id: ${action.id}) as its not in basket!`
//         )
//       }

//       return {
//         ...state,
//         basket: newBasket
//       }
    
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user
//       }

//     default:
//       return state;
//   }
// };

