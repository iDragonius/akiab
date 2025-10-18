"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { slug } from "@/utils/slug";
import { BlocksContent, Seo } from "@/types";

export const ActivitiesSlider = ({
  data,
}: {
  data: {
    title: string;
    image: {
      url: string;
    }[];
    id: number;
    content: BlocksContent;
    description: string;
    seo: Seo;
    publishDate: string;
    documentId: string;
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
      className={"w-full "}
      breakpoints={{
        1000: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 1,
        },
      }}
    >
      {data.map((slide, i) => (
        <SwiperSlide key={slide.id}>
          <div className={"border border-gray-200"}>
            <Image
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + slide.image[0].url}
              alt={""}
              width={300}
              height={300}
              className={"h-[200px] w-full object-cover "}
            />
            <div className={"p-4 bg-white"}>
              <p className={"text-[14px] text-primary mb-3"}>
                {slide.publishDate}
              </p>
              <h2
                className={
                  "text-primary font-semibold  text-[18px] mb-3  text-left h-[54px] line-clamp-2"
                }
              >
                {slide.title}
              </h2>
              <p className={"line-clamp-3 text-[#9b9b9b] text-[14px]"}>
                {slide.description}
              </p>
              <Link
                href={`/news/${slide.documentId}/${slug(slide.title)}`}
                className={
                  "text-white bg-primary font-medium mt-3 flex w-max px-4 rounded-[6px]  "
                }
              >
                Ətrfalı
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
