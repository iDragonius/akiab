"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { slug } from "@/utils/slug";

export const PartnersSlider = ({
  data,
}: {
  data: {
    id: number;

    name: string;
    logo: {
      url: string;
    };
    instagramUrl: string | null;
    about: string;
    facebookUrl: string | null;
    websiteUrl: string | null;
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
          slidesPerView: 5,
        },
        900: {
          slidesPerView: 4,
        },
        700: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
      }}
    >
      {data.map((slide, i) => (
        <SwiperSlide key={slide.id}>
          <Link
            href={`/partners/${slide.documentId}/${slug(slide.name)}`}
            className={
              "border border-gray-200 flex flex-col items-center justify-center w-full h-full rounded-[24px] transition-all ease-in-out hover:border-primary "
            }
          >
            <Image
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + slide.logo.url}
              alt={slide.name}
              width={300}
              height={300}
              className={"rounded-[24px] w-full   h-[200px] object-contain"}
            />
            <p className={"text-[15px] font-medium my-1"}>{slide.name}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
