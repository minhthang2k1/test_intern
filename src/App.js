import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import classNames from "classnames/bind";

import styles from "./App.module.scss";

const cx = classNames.bind(styles);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existItem = cartItems.find((x) => x.id === item.id);
    if (existItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...existItem, qty: existItem.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className={cx("content")}>
      <Products addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
