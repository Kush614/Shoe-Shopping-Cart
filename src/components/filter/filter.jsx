import * as FaIcons from "react-icons/fa";
import { useProductContext } from "../../context/productContext";
import "./filter.css";

export const Filter = () => {
  const {
    state: {
      filters: { rating, types, priceRange },
    },
    dispatch,
    getUniqueColor,
    getUniqueType,
    getUniqueRating,
    
  } = useProductContext();

  const colorFilterHandler = (color) => {
    dispatch({ type: "APPLY_COLOR_FILTER", payload: color });
  };

  const priceRangeHandler = (price) => {
    if (price === 700)
      dispatch({ type: "APPLY_PRICE_RANGE_FILTER", payload: price });
    dispatch({ type: "APPLY_PRICE_RANGE_FILTER", payload: price });
  };

  const typeFilterHandler = (type) => {
    dispatch({ type: "APPLY_TYPE_FILTER", payload: type });
  };

  const ratingFilterHandler = (rating) => {
    dispatch({ type: "APPLY_TYPE_RATING", payload: rating });
  };

  const clearHandler = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };


   
  return (
    <>
      <header className="filter-header">
        <h2 className="headings">Filter</h2>
        <span className="text btn-clear" onClick={() => clearHandler()}>
          CLEAR
        </span>
      </header>
      <div className="filters-container">
        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Cost</h2>
          <div style={{ margin: "1rem 0" }}>
            <div>
              <label className="lists filter-label">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange && priceRange.start === 121}
                  onClick={() => priceRangeHandler({ start: 121, end: 400 })}
                />
                121 to 400 INR
              </label>
              <label className="lists filter-label">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange && priceRange.start === 400}
                  onClick={() => priceRangeHandler({ start: 400, end: 700 })}
                />
                400 to 700 INR
              </label>
              <label className="lists filter-label">
                <input
                  type="radio"
                  name="price"
                  onClick={() => priceRangeHandler(700)}
                  checked={priceRange && priceRange === 700}
                />
                700 + INR
              </label>
            </div>
          </div>
        </div>

        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Colors</h2>
          <div style={{ margin: "1rem 0" }}>
            {getUniqueColor.map((eachColor, i) => {
              return eachColor === "other" ? (
                <img
                  onClick={() => colorFilterHandler(eachColor)}
                  className="lists filter-colors"
                  key={i}
                  src={
                    "https://res.cloudinary.com/dhqxln7zi/image/upload/v1661613650/pp_ivrmpm.jpg"
                  }
                  alt={eachColor}
                />
              ) : (
                <li
                  onClick={() => colorFilterHandler(eachColor)}
                  className="lists filter-colors"
                  key={i}
                  style={{ backgroundColor: eachColor }}
                ></li>
              );
            })}
          </div>
        </div>

        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Type</h2>

          <div style={{ margin: "1rem 0" }}>
            {getUniqueType?.map((eachType, i) => (
              <label
                className="lists filter-label"
                key={i}
                onClick={() => typeFilterHandler(eachType)}
              >
                <input
                  type="radio"
                  className="input-checkbox"
                  name="category"
                  checked={types && types === eachType}
                />
                <span>{eachType}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="filter-box">
          <h2 className="headings subheading filter-title ">Rating</h2>
          <div style={{ margin: "1rem 0" }}>
            {getUniqueRating.map((eachRate, i) => (
              <label
                className="lists filter-label"
                key={i}
                onClick={() => ratingFilterHandler(eachRate)}
              >
                <input
                  type="radio"
                  className="input-rating"
                  name="rating"
                  value={eachRate}
                  checked={rating && rating === eachRate}
                />
                <span>{eachRate}</span>
                <span>
                  <FaIcons.FaStar className="star-icon" />
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
 
    </>
  );
};
