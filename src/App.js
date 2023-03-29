import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import classNames from "classnames/bind";

import styles from "./App.module.scss";

const cx = classNames.bind(styles);

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    let localItems = JSON.parse(localStorage.getItem("cartItems"));
    if (localItems) {
      return localItems;
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existItem = cartItems.find((x) => x.id === item.id);
    if (existItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id
            ? { ...existItem, quantity: existItem.quantity + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const reduceFromCart = (item) => {
    const existItem = cartItems.find((x) => x.id === item.id);
    if (existItem.quantity === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== item.id);
      setCartItems(newCartItems.length ? newCartItems : []);
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id
            ? { ...existItem, quantity: existItem.quantity - 1 }
            : x
        )
      );
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <div className={cx("content")}>
      <Products addToCart={addToCart} cartItems={cartItems} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        reduceFromCart={reduceFromCart}
      />
    </div>
  );
};

export default App;
