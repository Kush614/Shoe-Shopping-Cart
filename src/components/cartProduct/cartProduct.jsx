import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import "./cartProduct.css";

export const CartProduct = ({ eachProduct }) => {
  const { dispatch } = useProductContext();

  const removeCartHandler = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const navigate = useNavigate();
  const singleProductHandler = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cart-product-card" key={eachProduct.id}>
      <div className="cart-image-wrapper">
        <img
          src={eachProduct.image}
          className="cart-product-img"
          alt="cart-product"
          onClick={() => singleProductHandler(eachProduct.id)}
        />
      </div>

      <div className="cart-product-info">
        <h6
          className="headings product-title"
          onClick={() => singleProductHandler(eachProduct.id)}
        >
          {eachProduct.name}
        </h6>
        <h6 className="headings product-title product-price">
          Rs. {eachProduct.price}/-
        </h6>
      </div>

      <p className="cross" onClick={() => removeCartHandler(eachProduct.id)}>
        X
      </p>
    </div>
  );
};
