"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export const ImagesSlider = ({
  data,
}: {
  data: {
    url: string;
  }[];
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className={" max-w-[800px] "}
    >
      {data.map((slide, i) => (
        <SwiperSlide key={i} className={"relative"}>
          <Image
            src={process.env.NEXT_PUBLIC_PUBLIC_URL + (slide.url as string)}
            alt={"img"}
            width={500}
            height={500}
            className={" w-[800px]"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
