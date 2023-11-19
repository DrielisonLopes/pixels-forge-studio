import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlick.scss";

const CarouselSlick = ({ children }) => {

  return (
    <Slider
      centerMode={true}
      centerPadding="60px"
      infinite={true}
      slidesToShow={4}
      autoplay={true}
      speed={1000}
      autoplaySpeed={2000}
      responsive={[
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 726,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
          }
        }
      ]}
      >
        {children}
    </Slider>
  )
};

export default CarouselSlick;
