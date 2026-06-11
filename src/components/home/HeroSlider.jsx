"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeroSlider.css";

const slides = [
  {
    image: "/images/slide3.jpg",
    title: "Committed to ESG Excellence",
    subtitle: "Committed to ESG Excellence",
    button: "Start Your Project",
    link: "/about",
  },
  {
    image: "/images/slide2.jpg",
    title: "Precision Stainless Steel Manufacturer",
    subtitle: "Precision Stainless Steel Manufacturer",
    button: "View Our Work",
    link: "/product",
  },
  {
    image: "/images/slide1.jpg",
    title: "Precision Stainless Steel, Perfected.",
    subtitle: "From identity to launch — we’re your partner in every step of the journey.",
    button: "Book a Free Call",
    link: "/about",
  },
];

export default function HeroSlider() {
  return (
    <section className="hero-slider hero-style">
      <Swiper
        modules={[Navigation, Pagination, Parallax, Autoplay]}
        speed={1000}
        loop={true}
        parallax={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-inner position-relative">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                style={{ objectFit: "cover", zIndex: -1 }}
              />
              <div className="slide-overlay"></div>
          
              <div className="h-container">
                <div className="slide-title">
                  <h2>{slide.title}</h2>
                </div>
          
                <div className="slide-text">
                  <p>{slide.subtitle}</p>
                </div>
          
                <div className="slide-btns">
                  <Link href={slide.link} className="theme-btn-s2">
                    {slide.button}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}