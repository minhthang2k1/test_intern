import React from "react";
import classNames from "classnames/bind";

import styles from "./Products.module.scss";
import Button from "../Button";
import Logo from "../Logo";
import datas from "../../data/shoes.json";

const cx = classNames.bind(styles);

const Products = ({ addToCart }) => {
  return (
    <div className={cx("product")}>
      <Logo />
      <div className={cx("title")}>Our Products</div>
      <div className={cx("body")}>
        {datas.shoes.map((data, index) => (
          <div className={cx("item")} key={index}>
            <div
              className={cx("item-image")}
              style={{ backgroundColor: `${data.color}` }}
            >
              <img src={data.image} alt="shoes" />
            </div>
            <div className={cx("item-name")}>{data.name}</div>
            <div className={cx("item-description")}>{data.description}</div>
            <div className={cx("item-bottom")}>
              <div className={cx("item-price")}>${data.price}</div>
              <Button onClick={() => addToCart(data)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
