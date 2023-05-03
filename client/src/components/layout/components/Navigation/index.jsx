import classnames from "classnames/bind";
import styles from "./Navigation.module.scss";
import logo from "../../../../assets/img/digiBlackLogo.svg";
import tabBar from "../../../../assets/img/icon/tabBar.svg";
import { Dropdown } from "react-bootstrap";
import phone from "../../../../assets/img/icon/phone.svg";
import shoppingCart from "../../../../assets/img/icon/shopping-cart.svg";
import searchIcon from "../../../../assets/img/icon/search.svg";
import Button from "../../../Button";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const cb = classnames.bind(styles);
function Navigation() {
  return (
    <>
      <div className={cb("wrapper")}>
        <div className="inner">
          <header
            className={cb(
              "header",
              "d-lg-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <Button href="#">
              <img src={logo} alt="Logo-Digiticket" />
            </Button>
            <div className={cb("search")}>
              <div className={cb("search__input")}>
                <input
                  type="text"
                  name="SearchKeyWord"
                  placeholder={"Tìm kiếm trên Digiticket"}
                  id="header-search"
                  className={cb("search__input-el")}
                />
                <img
                  src={searchIcon}
                  alt="searchIcon"
                  className={cb("search__input-icon")}
                />
              </div>

              <nav id={cb("search__keyword")} className="nav">
                <Button
                  className={cb("nav-link", "search__keyword-item")}
                  aria-current="page"
                  href="#"
                >
                  Hà Nội
                </Button>
                <Button
                  className={cb("nav-link", "search__keyword-item")}
                  href="#"
                >
                  Đà Nẵng
                </Button>
                <Button
                  className={cb("nav-link", "search__keyword-item")}
                  href="#"
                >
                  homestay
                </Button>
                <Button
                  className={cb("nav-link", "search__keyword-item")}
                  href={"#"}
                >
                  Vinpearl Safari
                </Button>
                <Button
                  className={cb("nav-link", "search__keyword-item")}
                  href={"#"}
                >
                  những từ khóa trước đó
                </Button>
              </nav>
            </div>
            <div className={cb("actions")}>
              <div className={cb("account")}>
                <FaUserAlt className={cb("account-icon")} />
                <div className={cb("account-type")}>
                  <span className={cb("account-span", "is-12px")}>
                    Tài khoản
                  </span>
                  <NavLink className={cb("account-name")} to="/login">
                    Đăng nhập
                  </NavLink>
                </div>
              </div>
              <div className={cb("cart")}>
                <img src={shoppingCart} alt="" />
                <span className="is-12px">Giỏ hàng</span>
              </div>
            </div>
          </header>
        </div>
        <div className={cb("menu")}>
          <div className="inner">
            <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
              <Dropdown>
                <Dropdown.Toggle
                  className={cb("menu__category")}
                  variant=""
                  id="menu-category"
                >
                  <img
                    src={tabBar}
                    alt="Tab_Bar"
                    className={cb("menu__category-icon")}
                  />
                  <h3 className={cb("menu__category-title")}>
                    DANH MỤC DỊCH VỤ
                  </h3>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>DANH MỤC DỊCH VỤ 1</Dropdown.Item>
                  <Dropdown.Item>DANH MỤC DỊCH VỤ 2</Dropdown.Item>
                  <Dropdown.Item>DANH MỤC DỊCH VỤ 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div
                className={cb(
                  "menu__order",
                  "d-lg-flex",
                  "align-items-lg-center"
                )}
              >
                <div
                  className={cb(
                    "contact",
                    "d-lg-flex",
                    "align-items-lg-center"
                  )}
                >
                  <img
                    className={cb("contact__icon")}
                    src={phone}
                    alt={"phone-Icon"}
                  />
                  <h3 className={cb("contact__title", "is-14px")}>1890 000</h3>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    className={cb("menu__order-checkOrder")}
                    variant=""
                    id="menu-order"
                  >
                    <p className={cb("menu__order-title", "is-14px")}>
                      KIỂM TRA ĐƠN HÀNG
                    </p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>KIỂM TRA ĐƠN HÀNG 1</Dropdown.Item>
                    <Dropdown.Item>KIỂM TRA ĐƠN HÀNG 2</Dropdown.Item>
                    <Dropdown.Item>KIỂM TRA ĐƠN HÀNG 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
