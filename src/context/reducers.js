export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, allShoses: action.payload };

    case "APPLY_PRICE_RANGE_FILTER":
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.payload },
      };

    case "APPLY_COLOR_FILTER":
      if (state.filters.uniqueColors.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            uniqueColors: [...state.filters.uniqueColors].filter(
              (eachColor) => eachColor !== action.payload
            ),
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            uniqueColors: [...state.filters.uniqueColors, action.payload],
          },
        };
      }

    case "APPLY_TYPE_FILTER":
      return { ...state, filters: { ...state.filters, types: action.payload } };

    case "APPLY_TYPE_RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          uniqueColors: [],
          types: null,
          priceRange: null,
          rating: null,
          search: "",
        },
      };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      let removedProduct = state.cart.filter(
        (eachProduct) => eachProduct.id !== action.payload
      );

      return { ...state, cart: [...removedProduct] };

    default:
      return state;
  }
};
