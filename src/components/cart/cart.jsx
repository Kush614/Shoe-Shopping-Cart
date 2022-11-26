import "./cart.css";
import * as FaIcons from "react-icons/fa";
import { useProductContext } from "../../context/productContext";
import { CartProduct } from "../cartProduct/cartProduct";

export const Cart = () => {
  const {
    state: { cart },
  } = useProductContext();

  return (
    <>
      <header className="top-bar">
        <h2 className="headings">Cart</h2>
        <span className="text btn-clear">
          <FaIcons.FaCartPlus />
        </span>
      </header>

      {!cart.length ? (
        <p className="text message-text">what's stopping you, designer? </p>
      ) : (
        <div className="cart-container">
          <div className="cart-product-container">
            {[...new Set(cart)].reverse()?.map((eachProduct) => (
              <CartProduct eachProduct={eachProduct} />
            ))}
          </div>

          <footer className="cart-footer">
            <p className="text footer-text">
              <FaIcons.FaLocationArrow /> Home <FaIcons.FaCalendarAlt /> Select
              Date
            </p>

            <div className="btn-container">
              <button className="btn btn-order-now">Order Now</button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};
