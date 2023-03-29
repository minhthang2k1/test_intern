import classNames from "classnames/bind";
import React, { useState } from "react";
import images from "../../assets/images";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({ onClick, cartItems }) => {
  console.log(cartItems?.quantity);
  const [isChecked, setIsChecked] = useState(false);
  console.log(cartItems);
  const handleButtonClick = () => {
    setIsChecked(true);
    onClick();
  };

  return (
    <div onClick={!cartItems ? handleButtonClick : undefined}>
      {cartItems ? (
        <div className={cx("checked")}>
          <img src={images.check} alt="check" />
        </div>
      ) : (
        <p className={cx("button-add")}>ADD TO CART</p>
      )}
    </div>
  );
};

export default Button;
