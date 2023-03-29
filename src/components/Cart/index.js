import classNames from "classnames/bind";
import React from "react";

import styles from "./Cart.module.scss";
import Logo from "../Logo";
import images from "../../assets/images";

const cx = classNames.bind(styles);

const Cart = ({ cartItems, removeFromCart, reduceFromCart, addToCart }) => {
  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={cx("cart")}>
      <Logo />
      <div className={cx("title")}>
        Your cart
        <span className={cx("price")}>${totalPrice?.toFixed(2)}</span>
      </div>
      <div className={cx("body")}>
        {cartItems?.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          cartItems?.map((item, index) => (
            <div className={cx("item")} key={index}>
              <div className={cx("item-image")}>
                <div
                  className={cx("image")}
                  style={{ backgroundColor: `${item.color}` }}
                >
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
              <div className={cx("item-description")}>
                <div className={cx("item-name")}>{item.name}</div>

                <div className={cx("item-price")}>${item.price}</div>
                <div className={cx("item-actions")}>
                  <div className={cx("item-count")}>
                    <div
                      className={cx("btn-count")}
                      onClick={() => reduceFromCart(item)}
                    >
                      -
                    </div>
                    <div className={cx("number-count")}>{item.quantity}</div>
                    <div
                      className={cx("btn-count")}
                      onClick={() => addToCart(item)}
                    >
                      +
                    </div>
                  </div>
                  <div
                    className={cx("btn-remove")}
                    onClick={() => removeFromCart(item)}
                  >
                    <img src={images.trash} alt="remove" />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
