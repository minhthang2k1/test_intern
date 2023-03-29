import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.scss";

const cx = classNames.bind(styles);

const App = () => {
  const notify = (message) =>
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  const notifyError = (message) =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });

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
      notify("Thêm sản phẩm thành công!");
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      notify("Thêm sản phẩm thành công!");
    }
  };

  const reduceFromCart = (item) => {
    const existItem = cartItems.find((x) => x.id === item.id);
    if (existItem.quantity === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== item.id);
      setCartItems(newCartItems.length ? newCartItems : []);
      notifyError("Xóa sản phẩm thành công!");
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id
            ? { ...existItem, quantity: existItem.quantity - 1 }
            : x
        )
      );
      notify("Bớt sản phẩm thành công!");
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
    notifyError("Xóa sản phẩm thành công!");
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
      <ToastContainer />
    </div>
  );
};

export default App;
