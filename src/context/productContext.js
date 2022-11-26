import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../backend/data";
import {
  filterByColor,
  filterByRating,
  filterByType,
  filteredPriceRangeShoes,
} from "../utils/filters";
import {
  findUniqueType,
  findUniqueColor,
  findUniqueRating,
} from "../utils/findUniqueValue";

import { productReducer } from "./reducers";

const ProductContext = createContext(null);

const initialState = {
  allShoses: [],
  cart: [],
  filters: {
    uniqueColors: [],
    types: null,
    priceRange: null,
    rating: null,
    search: "",
  },
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const shoes = state.allShoses;
  const {
    filters: { priceRange, uniqueColors, types, rating },
  } = state;

 
  // Filter range
  // 400 to 700
  // 700 +

  const getFilteredPriceRangeShoes = filteredPriceRangeShoes(
    shoes,
    priceRange === 700 ? priceRange : priceRange
  );

  const getFilterByColor = filterByColor(
    getFilteredPriceRangeShoes,
    uniqueColors
  );

  const getFilterByType = filterByType(getFilterByColor, types);

  const getFilterByRating = filterByRating(getFilterByType, rating);

  const filterdProducts = getFilterByRating;

   

  // Get unique colors
  const getUniqueColor = findUniqueColor(shoes);

  // Get Shoes types
  const getUniqueType = findUniqueType(shoes);

  // Get Shoes rating
  const getUniqueRating = findUniqueRating(shoes);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: data.products });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        getUniqueColor,
        getUniqueType,
        getUniqueRating,
        filterdProducts,
        
      }}
    >
      {" "}
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
