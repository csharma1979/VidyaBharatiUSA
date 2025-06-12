import React from 'react';
import Slider from 'react-slick';
import { Box, styled } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSection = styled(Box)(({ theme }) => ({
  marginTop: '100px'
}));

const SlideContent = styled(Box)({
  height: '70vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex'
});

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  };

  const slides = [
    { image: '/assets/Home/banner1.webp' },
    { image: '/assets/Home/banner2.webp' },
    { image: '/assets/Home/banner3.webp' }
  ];

  return (
    <BannerSection>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <SlideContent sx={{ backgroundImage: `url(${slide.image})` }} />
          </div>
        ))}
      </Slider>
    </BannerSection>
  );
};

export default Banner;