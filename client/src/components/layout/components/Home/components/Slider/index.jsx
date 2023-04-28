import classNames from 'classnames/bind';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Slider.module.scss";
import slide1 from "../../../../../../assets/img/slider1.png";
import slide2 from "../../../../../../assets/img/slider2.png";
import slide3 from "../../../../../../assets/img/slider3.png";
import slide4 from "../../../../../../assets/img/slider4.png";
const cb = classNames.bind(styles);
function Slider() {
  return (
    <Carousel className={cb("container")}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;