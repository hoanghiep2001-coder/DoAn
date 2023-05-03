import classnames from "classnames/bind";
import styles from "./Loading.module.scss";

const cb = classnames.bind(styles);
function Loading() {
  const checkHandle = () => {
    console.log("check");
  };

  return (
    <>
      <div className={cb("wrapper")} onClick={checkHandle}>
        <div className={cb("inner")}></div>
      </div>
    </>
  );
}

export default Loading;
