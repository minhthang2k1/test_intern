import classNames from "classnames/bind";
import React, { useState } from "react";
import images from "../../assets/images";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(true);
    onClick();
  };

  return (
    <div
      className={cx("button", {
        "button-add": !isChecked,
        "button-checked": isChecked,
      })}
      onClick={!isChecked ? handleButtonClick : undefined}
    >
      {isChecked ? (
        <div className={cx("checked")}>
          <img src={images.check} alt="check" />
        </div>
      ) : (
        <p>ADD TO CART</p>
      )}
    </div>
  );
};

export default Button;
