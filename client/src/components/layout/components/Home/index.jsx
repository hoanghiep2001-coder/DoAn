import classnames from "classnames/bind";
import Banner from "./components/Banner";
import ProductContainer from "./components/ProductContainer";
import Slider from "./components/Slider";
import styles from "./Home.module.scss";
// import mongoDB from "../../../../assets/data/mongoDB";
const cb = classnames.bind(styles);
// const mongoDB = require("../../../../assets/data/mongoDB")
function Home() {
  // console.log(mongoDB);
  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner")}>
        <Slider />
        <ProductContainer />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
