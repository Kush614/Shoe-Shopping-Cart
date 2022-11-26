export const filteredPriceRangeShoes = (array, price) => {
  let copied = [...array];

  if (!price) {
    return copied;
  }

  if (price === 700) {
    return copied.filter((eachShoes) => eachShoes.price >= price);
  } else if (typeof price === "object") {
    return copied.filter(
      (eachShoes) =>
        eachShoes.price >= price?.start && eachShoes.price <= price?.end
    );
  }
};

export const filterByColor = (array, colors) => {
  let copied = [...array];

  if (colors.length !== 0) {
    return copied.filter((element) => colors.includes(element.color));
  }
  return copied;
};

export const filterByType = (array, type) => {
  let copied = [...array];


  if (!type) {
    return copied;
  }

  return copied?.filter(
    (each) => each.type?.toLowerCase() === type?.toLowerCase()
  );
};

export const filterByRating = (array, rating) => {
  let copied = [...array];


  if (!rating) {
    return copied;
  }

  return copied?.filter(
    (each) => each.rating === rating
  );
};