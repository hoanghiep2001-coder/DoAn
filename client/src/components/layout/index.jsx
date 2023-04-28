import classnames from "classnames/bind";
import styles from "./Layout.module.scss";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const cb = classnames.bind(styles);
function Layout() {
  return (
    <>
      <div className={cb("wrapper")}>
        <div className={cb("inner")}>
          <Navigation />
          <Home />
          <Blog />
        </div>
      </div>
    </>
  );
}

export default Layout;
