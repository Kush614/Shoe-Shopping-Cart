import { useProductContext } from "../../context/productContext";
import "./store.css";
import { Cart, Filter, ProductCard } from "../../components";
import * as FaIcons from "react-icons/fa";

export const Store = () => {
  const { filterdProducts } = useProductContext();

  return (
    <div className="container store-container">
      <section className="wrapper store-wrapper">
        <div className="filter-wrapper">
          <Filter />
        </div>
        <div className="product-wrapper">
          <header className="top-bar">
            <h2 className="headings">Shoes</h2>
            <button className="btn btn-sortBy">
              <span>
                <FaIcons.FaSearch className="search-icon" />
              </span>
              Sort By
            </button>
          </header>

          <div className="product-container">
            {filterdProducts?.map((eachProduct) => (
              <ProductCard eachProduct={eachProduct} />
            ))}
          </div>
        </div>

        <div className="cart-wrapper">
          <Cart />
        </div>
      </section>
    </div>
  );
};
