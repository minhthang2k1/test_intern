import React from "react";
import images from "../../assets/images";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <div className={cx("logo")}>
      <img src={images.nike} alt="nike" />
    </div>
  );
};

export default Logo;
