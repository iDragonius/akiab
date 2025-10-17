"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export const Slider = ({
  data,
}: {
  data: {
    id: number;
    title: string | null;
    url: string | null;
    description: string | null;
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
        <SwiperSlide key={slide.id} className={"relative"}>
          <Image
            src={
              process.env.NEXT_PUBLIC_PUBLIC_URL + (slide.image.url as string)
            }
            alt={"img"}
            width={1440}
            height={1060}
            className={"w-full h-[1060px] max-sm:h-[500px] object-cover "}
          />
          <div className={"absolute w-full h-full bg-black/40 top-0  "}>
            {slide?.title && slide?.description && slide.url && (
              <div className={"box h-full flex justify-center py-10 flex-col"}>
                <h2
                  className={
                    "max-sm:text-[24px] text-[40px] text-white font-semibold mb-3"
                  }
                >
                  {slide.title}
                </h2>{" "}
                <p
                  className={
                    "text-[24px] max-sm:text-[16px]  text-white font-medium mb-7 line-clamp-3 max-w-[600px] "
                  }
                >
                  {slide?.description}
                </p>
                <Link
                  href={slide.url}
                  className={
                    "flex justify-center items-center max-sm:px-2 max-sm:text-[16px] max-sm:py-1 px-5 py-2 bg-primary text-white rounded-[10px] text-[20px] w-[200px] font-medium"
                  }
                >
                  Ətraflı
                </Link>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
