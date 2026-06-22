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
    image: "/images/slide1.jpg",
    title: "India's Leading Precision Stainless Steel Manufacturer",
    subtitle:
      "Delivering world-class stainless steel strips, foils, and alloy steel solutions engineered for performance, precision, and reliability.",
    button: "Request a Quote",
    link: "/contact",
  },
  {
    image: "/images/slide2.jpg",
    title: "Precision Engineered for Critical Industries",
    subtitle:
      "Trusted by automotive, engineering, electrical, and industrial manufacturers for consistent quality and superior performance.",
    button: "Explore Products",
    link: "/products",
  },
  {
    image: "/images/slide3.jpg",
    title: "Driving Sustainable Manufacturing Excellence",
    subtitle:
      "Committed to innovation, responsible manufacturing, and creating long-term value for customers, partners, and communities.",
    button: "Contact Us",
    link: "/contact",
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
                  {index === 0 ? (
                    <h1 className="text-light">{slide.title}</h1>
                  ) : (
                    <h1 className="text-light">{slide.title}</h1>
                  )}
                </div>

                <div className="slide-text">
                  <p className="fs-5">{slide.subtitle}</p>
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
