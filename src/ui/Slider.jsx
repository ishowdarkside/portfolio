import styles from "./Slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
// eslint-disable-next-line react/prop-types
export default function SliderComponent({ children }) {
  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
