"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export const Slider = ({
  data,
}: {
  data: {
    id: number;
    title: string | null;
    url: string | null;
    image: {
      url: string;
    };
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
      className={"w-full"}
    >
      {data.map((slide, i) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={
              process.env.NEXT_PUBLIC_PUBLIC_URL + (slide.image.url as string)
            }
            alt={"img"}
            width={1440}
            height={1060}
            className={"w-full h-[1060px]"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
