"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "src/ui/ProductCard";

export default function ProductCarousel({ products }) {
  return (
    <div className="home2-service-slider-area">
      <div className="row mb-30">
        <div className="col-lg-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              prevEl: ".service-slider-prev",
              nextEl: ".service-slider-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="slider-btn-grp two">
            <div className="slider-btn service-slider-prev">
              <i className="bi bi-arrow-left"></i>
            </div>

            <div className="slider-btn service-slider-next">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
