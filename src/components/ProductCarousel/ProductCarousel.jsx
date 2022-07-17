import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { carouselBreakpoints } from "./CarouselConfig";

import { products } from "../../data/products";
import Product from "./Product/Product";

const ProductCarousel = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      loop={true}
      centeredSlides={true}
      breakpoints={carouselBreakpoints}
    >
      {products.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <Product
              image={product.image}
              title={product.name}
              price={"$" + product.price}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductCarousel;
