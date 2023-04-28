import classNames from "classnames/bind";
import api from "../../../../../../assets/data/api";
import styles from "./Banner.module.scss";
const cb = classNames.bind(styles);
function Banner() {
    return ( <div className={cb("container")}>
        <img src={api.Home.saleBanner.path} alt="sale-banner" className={cb("banner")}/>
    </div> );
}

export default Banner;