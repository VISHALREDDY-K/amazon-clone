import React, { createContext, useContext, useReducer } from "react";
import App from "./App";
import Checkout from "./Checkout";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Order from "./Order";
import Orders from "./Orders";
import Payment from "./Payment";
import Product from "./Product";
import Subtotal from "./Subtotal";
// Prepares the dataLayer
const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
 
{children}

      
 


  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

