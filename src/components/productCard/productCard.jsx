import "./productCard.css";
import * as FaIcons from "react-icons/fa";
import { useProductContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ eachProduct }) => {
  const { dispatch } = useProductContext();

  const addToCart = (eachProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: eachProduct });
  };

  const navigate = useNavigate();

  const singleProductHandler = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card" key={eachProduct.id}>
      <img
        src={eachProduct.image}
        className="product-image"
        alt="product_image"
        onClick={() => singleProductHandler(eachProduct.id)}
      />
      <div className="product-info">
        <h6 className="headings product-title" onClick={() => singleProductHandler(eachProduct.id)}>{eachProduct.name}</h6>
        <h6 className="headings product-title product-price">
          {" "}
          Rs. {eachProduct.price}/-
        </h6>
        <p className="product-rating">
          {eachProduct.rating}/5 <FaIcons.FaStar className="star-icon" />
        </p>
      </div>
      <button className="btn btn-cart" onClick={() => addToCart(eachProduct)}>
        Add to Cart
      </button>
    </div>
  );
};
