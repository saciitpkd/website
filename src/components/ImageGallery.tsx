"use client";

import { useEffect, useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  images: string[];
  galleryId: string;
};

export function ImageGallery({ images, galleryId }: Props) {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const q = () => setNarrow(window.innerWidth < 768);
    q();
    window.addEventListener("resize", q);
    return () => window.removeEventListener("resize", q);
  }, []);

  return (
    <div className="gallery-container">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        navigation
        pagination={{
          clickable: true,
          el: `.swiper-pagination-${galleryId}`,
        }}
        coverflowEffect={{
          rotate: narrow ? 0 : 50,
          stretch: narrow ? 50 : 100,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        speed={600}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className={`mySwiper-${galleryId}`}
        onSlideChange={({ activeIndex }) => {
          const slides = document.querySelectorAll(
            `.mySwiper-${galleryId} .swiper-slide img`,
          );
          slides.forEach((slide, index) => {
            const el = slide as HTMLElement;
            if (index === activeIndex) {
              el.style.filter = "brightness(1)";
              el.style.opacity = "1";
              el.style.boxShadow = "none";
            } else {
              el.style.filter = "brightness(0.6)";
              el.style.opacity = "0.8";
              el.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.4)";
            }
          });
        }}
      >
        {images.map((url, index) => (
          <SwiperSlide key={url} className="swiper-slide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        <div
          className={`swiper-pagination swiper-pagination-${galleryId}`}
        />
      </Swiper>
    </div>
  );
}
