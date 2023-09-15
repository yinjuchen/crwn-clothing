// import { createContext, useReducer } from 'react';

// import { createAction } from '../utils/reducer/reducer.utils';

// const addCartItem = (cartItems,productToAdd) => {
//   // find if cartItems contains productToAdd
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );
//   // if found, increase the quantity
//   if(existingCartItem)  {
//     return cartItems.map((cartItem) => 
//     cartItem.id === productToAdd.id
//     ? {...cartItem, quantity: cartItem.quantity + 1}
//     : cartItem
//     );
//   }

//   // return new array with modified cartItem, new cart Item
//   return [...cartItems, {...productToAdd,quantity: 1}]
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
// // find the cart item to remove
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );
 
// // check if quantity is equal to 1, if it is remove that item from the cart
// // filter method, if the cartItem.id !== cartItemToRemove.id, just keep it
// if(existingCartItem.quantity === 1) {
//   return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

// }

// // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//   cartItem.id === cartItemToRemove.id
//   ? {...cartItem, quantity: cartItem.quantity - 1 }
//   : cartItem
//   )
// };

// // clearn cartItem
// const clearCartItem = (cartItem, cartItemToClear) => {
//   return cartItem.filter(cartItem => cartItem.id !==cartItemToClear.id)
// }


// // set createContext
// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [], 
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0, 
// })

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: 'SET_CART_ITEMS',
//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
//   SET_CART_COUNT: 'SET_CART_COUNT',
//   SET_CART_TOTAL: 'SET_CART_TOTAL',
// }

// // initialize the state
// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [], 
//   cartCount: 0,
//   cartTotal: 0, 
// }

// // cartReducer 
// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch(type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       }
//       case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       }
//     default: 
//       throw new Error(`Unhandled type ${type} in cartReducer`)
    
//   }
// }

// export const CartProvider = ({children}) => {
//   const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer,INITIAL_STATE)

//   const updateCartItemsReducer = (newCartItems) => {

//     // generate newCartCount
//     const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

//     // generate newCartTotal
//     const newCartTotal = newCartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price, 0);

//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems, 
//         cartTotal: newCartTotal, 
//         cartCount: newCartCount,
//       })
//     )
//   }
//    /* dispatch new action with payload = {
//     newCartItems.
//     newCartTotal.
//     newCartCount
//    } */

  
//   // addItemToCart function 
//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   };

//   // removeItemFromCart function 
//   const removeItemFromCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems,cartItemToRemove);
//     updateCartItemsReducer(newCartItems);
//   };
  
//   // clearItemFromCart function
//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems,cartItemToClear);
//     updateCartItemsReducer(newCartItems);
//   };

//   // setIsCartOpen function 
//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
//   }


//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart, 
//     removeItemFromCart,
//     clearItemFromCart,
//     cartItems, 
//     cartCount,
//     cartTotal,
//   }

//   return (
//     <CartContext.Provider value={value}>{children}</CartContext.Provider>
//   )
// }