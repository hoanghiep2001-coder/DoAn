import classNames from "classnames/bind";
import styles from "./ProductContainer.module.scss";
import api from "../../../../../../assets/data/api";
import ProductItem from "../ProductItem";
import { useEffect, useRef } from "react";

const cb = classNames.bind(styles);
function ProductContainer() {
  const countDownRef = useRef(null);

  useEffect(() => {
    const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (countDownRef.current) {
        countDownRef.current.innerHTML =
          days + " : " + hours + " : " + minutes + " : " + seconds;
      }
      if (distance < 0) {
        clearInterval(x);
        countDownRef.current.innerHTML = "EXPIRED";
      }
    }, 1000);

    return () => {};
  }, []);

  return (
    <div className={cb("container")}>
      <div className={cb("sale-title")}>
        <img
          className={cb("sale-img")}
          src={api.Home.Product.saleTitle.path}
          alt="sale-img"
        />
      </div>
      <div className={cb("countDown")}>
        <h3 className={cb("countDown-title")} ref={countDownRef}>
          ""
        </h3>
      </div>
      <div className="row">
        {api.Home.Product.Container.map((item, index) => {
          return (
            <div className="col col-lg-2-4" key={index}>
              <ProductItem
                image={item.path}
                title={item.title}
                discount={item.discount}
                sale={item.sale}
                oldPrice={item.oldPrice}
                place={item.place}
                link={item.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductContainer;
