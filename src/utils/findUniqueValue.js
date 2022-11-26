export const findUniqueColor = (array) => {
    return [...new Set(array.map((element) => element.color))];
  };

  export const findUniqueType = (array) => {
    return [...new Set(array.map((element) => element.type))];
  };

  export const findUniqueRating = (array) => {
    return [...new Set(array.map((element) => element.rating))];
  };