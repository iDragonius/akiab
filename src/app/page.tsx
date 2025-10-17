import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BlocksContent, Seo } from "@/types";
import { Slider } from "@/components/slider";
import Link from "next/link";
import { slug } from "@/utils/slug";
import { PartnersSlider } from "@/components/partners-slider";
import { ActivitiesSlider } from "@/components/activities-slider";

async function getHome(): Promise<{
  data: {
    id: number;
    activities: {
      id: number;
      title: string;
      url: string;
      image: {
        url: string;
      };
    }[];
    whoareweTitle: string;
    whoareweList: {
      content: string;
      id: number;
    }[];
    whoareweCards: {
      id: number;

      title: string;
      description: string;
    }[];
    whoareweImage: {
      url: string;
    };
    ourservicesTitle: string;
    ourservicesList: {
      title: string;
      description: string;
      url: string;
      id: number;
    }[];
    slider: {
      id: number;
      title: string | null;
      url: string | null;
      description: string | null;
      image: {
        url: string;
      };
    }[];
    seo: Seo;
  };
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/home`);
  url.searchParams.append("populate[0]", "seo");
  url.searchParams.append("populate[1]", "seo.shareImage");
  url.searchParams.append("populate[2]", "activities");
  url.searchParams.append("populate[3]", "activities.image");
  url.searchParams.append("populate[4]", "whoareweList");
  url.searchParams.append("populate[5]", "whoareweCards");
  url.searchParams.append("populate[6]", "whoareweImage");
  url.searchParams.append("populate[7]", "ourservicesList");
  url.searchParams.append("populate[8]", "slider");
  url.searchParams.append("populate[9]", "slider.image");

  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch home");
  return res.json();
}

async function getPartners(): Promise<{
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
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/partners`);

  url.searchParams.append("populate[0]", "logo");

  url.searchParams.set("pagination[limit]", "30");

  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

async function getAnnouncements(): Promise<{
  data: {
    title: string;
    id: number;
    image: {
      url: string;
    };
    content: BlocksContent;
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/announcements`);

  url.searchParams.append("populate[0]", "image");

  url.searchParams.set("pagination[limit]", "3");

  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });
  if (!res.ok) throw new Error("Failed to fetch announcements");
  return res.json();
}

async function getTeam(): Promise<{
  data: {
    id: number;
    fullName: string;
    image: {
      url: string;
    };
    position: string;
    facebookUrl: string | null;
    instagramUrl: string | null;
    twitterUrl: string | null;
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
  url.searchParams.append("populate[0]", "image");
  url.searchParams.set("pagination[limit]", "3");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

async function getActivities(): Promise<{
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
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/activities`);

  url.searchParams.append("populate[1]", "image");
  url.searchParams.append("populate[2]", "seo");
  url.searchParams.set("sort", "publishDate:desc");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
export default async function Home() {
  const { data } = await getHome();
  const partners = await getPartners();
  const announcements = await getAnnouncements();
  const team = await getTeam();
  const activities = await getActivities();

  console.log(data);
  return (
    <main>
      <Slider data={data.slider} />
      <div className={"box mt-[50px]"}>
        <h2
          className={
            " max-sm:text-[24px] text-[32px] font-semibold text-primary text-center mb-5"
          }
        >
          XİDMƏTLƏRİMİZ
        </h2>
        <p className={"text-center  max-sm:text-[14px]  text-[#444444]"}>
          {data.ourservicesTitle}
        </p>
        <div
          className={
            "flex flex-wrap gap-5  justify-center mt-6 max-sm:flex-col"
          }
        >
          {data.ourservicesList.map((service) => (
            <Link
              key={service.id}
              href={service.url}
              className={
                "w-[32%] shadow-[0px_0px_10px_rgba(19,174,246,0.709)] flex flex-col items-center justify-center p-5 transition-all ease-in-out hover:bg-primary group rounded-[10px] max-sm:w-full"
              }
            >
              <h3
                className={
                  "text-primary text-[24px] group-hover:text-white font-semibold"
                }
              >
                {service.title}
              </h3>
              <p
                className={
                  "line-clamp-4 group-hover:text-white text-gray-600 text-center mt-2 mb-5"
                }
              >
                {service.description}
              </p>
              <div
                className={
                  "text-primary underline underline-offset-4 text-[20px] group-hover:text-white "
                }
              >
                Daha çox
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={"box mt-[50px]"}>
        <h2
          className={
            "text-[32px]  max-sm:text-[24px] font-semibold text-primary text-center mb-5"
          }
        >
          BİZ KİMİK?
        </h2>
        <p className={"text-center max-sm:text-[14px] text-[#444444] mb-4"}>
          {data.whoareweTitle}
        </p>
        <div className={"flex gap-5 max-sm:flex-col"}>
          <Image
            src={process.env.NEXT_PUBLIC_PUBLIC_URL + data.whoareweImage.url}
            alt={"Who we are"}
            height={370}
            width={500}
            className={"w-1/2 h-[370px] object-cover max-sm:w-full"}
          />
          <div className={"flex flex-col gap-2"}>
            {data.whoareweList.map((item) => (
              <p key={item.id} className={"text-[#444444] text-justify  "}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"inline min-w-[18px] mr-2 mb-1"}
                >
                  <path
                    d="M9 0.666666C4.41667 0.666666 0.666672 4.41667 0.666672 9C0.666672 13.5833 4.41667 17.3333 9 17.3333C13.5833 17.3333 17.3333 13.5833 17.3333 9C17.3333 4.41667 13.5833 0.666666 9 0.666666ZM9 15.6667C5.32501 15.6667 2.33334 12.675 2.33334 9C2.33334 5.325 5.32501 2.33333 9 2.33333C12.675 2.33333 15.6667 5.325 15.6667 9C15.6667 12.675 12.675 15.6667 9 15.6667ZM12.825 5.31667L7.33334 10.8083L5.175 8.65833L4.00001 9.83333L7.33334 13.1667L14 6.5L12.825 5.31667Z"
                    fill="#3B99E0"
                  />
                </svg>

                {item.content}
              </p>
            ))}
          </div>
        </div>
        <div className={"mt-[40px] flex gap-5 justify-between max-sm:flex-col"}>
          {data.whoareweCards.map((card, i) => (
            <div
              key={card.id}
              className={
                "border border-gray-300 rounded-[10px] p-5  flex flex-col  items-center hover:shadow-[0px_0px_10px_rgba(19,174,246,0.709)] transition-all ease-in-out w-full"
              }
            >
              {i === 0 && (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.66663 0L9.33331 0.666656L9.33328 2H13.3333V11.3333H0V2H4V0.666656L4.66663 0H8.66663ZM1.33328 6.90422V10H12V6.90422C10.6679 7.28534 9.33441 7.52372 7.99997 7.61903V8.66666H5.33331V7.61906C3.99888 7.52375 2.66534 7.28538 1.33331 6.90425M12 3.33337H1.33331V5.51356C3.11369 6.06044 4.89081 6.33337 6.66663 6.33337C8.44247 6.33337 10.2196 6.06044 12 5.51356V3.33337ZM8 1.33337H5.33334V2H8V1.33337Z"
                    fill="#3B99E0"
                  />
                </svg>
              )}{" "}
              {i === 1 && (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 21H21"
                    stroke="#3B99E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3.182L11 1L19 3.182V6H3V3.182Z"
                    stroke="#3B99E0"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6V18M7.5 6V18M11 6V18M14.5 6V18M18 6V18"
                    stroke="#3B99E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.5 18H19.5V21H2.5V18Z"
                    stroke="#3B99E0"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              )}{" "}
              {i === 2 && (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z"
                    fill="#3B99E0"
                  />
                </svg>
              )}
              <h3 className={"text-primary text-[24px] font-semibold mt-1.5"}>
                {card.title}
              </h3>
              <p className={"text-[#444444] text-center mt-2"}>
                {card.description.split("\n").map((item) => (
                  <span key={item}>
                    {item}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={"w-full bg-primary"}>
        <div className={"box mt-[50px] py-10"}>
          <h1
            className={
              "text-center  max-sm:text-[24px] font-semibold text-[32px] mb-[20px] text-white"
            }
          >
            FƏALİYYƏTLƏRİMİZ
          </h1>

          <ActivitiesSlider data={activities.data} />
        </div>
      </div>

      <div className={"box mt-[50px]"}>
        <h1
          className={
            "text-center  max-sm:text-[24px] text-primary font-semibold text-[32px] mb-[20px]"
          }
        >
          TƏRƏFDAŞLARIMIZ
        </h1>

        <PartnersSlider data={partners.data} />
      </div>
      <div className={"box mt-[50px]"}>
        <h1
          className={
            "text-center   max-sm:text-[24px] text-primary font-semibold text-[32px] mb-[20px]"
          }
        >
          ELANLAR
        </h1>
        <div className={"grid grid-cols-3 gap-5 w-full max-sm:grid-cols-1"}>
          {announcements.data.map((announcement) => (
            <div key={announcement.id} className={"border border-gray-200"}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_PUBLIC_URL + announcement.image.url
                }
                alt={""}
                width={300}
                height={300}
                className={"w-full h-[350px] object-cover"}
              />
              <div className={"p-4"}>
                <h2
                  className={
                    "text-primary font-semibold text-center text-[18px] mb-4 line-clamp-2  h-[54px]"
                  }
                >
                  {announcement.title}
                </h2>
                <div className={"line-clamp-3"}>
                  {announcement.content.map((content, k) => (
                    <div key={k}>
                      {content.children.map((row, i) => (
                        <p
                          key={i}
                          className={"text-primary text-[14px] font-medium"}
                        >
                          {" "}
                          {row.text}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <Link
                  href={"/announcements"}
                  className={
                    "text-white bg-primary px-3 py-2 rounded-[5px] mt-5 flex items-center justify-center text-[14px] w-max"
                  }
                >
                  Ətraflı
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={"box mt-[50px]"}>
        <h1
          className={
            "text-center text-primary font-semibold text-[32px] mb-[10px] ax-sm:text-[24px]"
          }
        >
          İDARƏ HEYƏTİ
        </h1>
        <div className={"grid grid-cols-3 gap-5 w-full  max-sm:grid-cols-1"}>
          {team.data.map((teamEl) => (
            <div
              key={teamEl.id}
              className={"flex flex-col items-center group "}
            >
              <Image
                src={process.env.NEXT_PUBLIC_PUBLIC_URL + teamEl.image.url}
                alt={teamEl?.fullName}
                width={256}
                height={256}
                className={
                  "rounded-[24px]  object-cover group-hover:-translate-y-3 transition-all ease-in-out"
                }
              />
              <div
                className={
                  "bg-primary w-full h-[150px] rounded-[24px] flex items-center justify-center"
                }
              >
                <div
                  className={
                    "h-[150px] bg-white text-primary w-[calc(100%-30px)] rounded-[24px] p-4 flex flex-col items-center group-hover:-translate-y-3 transition-all ease-in-out"
                  }
                >
                  <h2 className={"text-[20px] font-semibold mb-2"}>
                    {teamEl.fullName}
                  </h2>
                  <p className={"font-medium"}>{teamEl.position}</p>
                  <div className={"flex  gap-5 mt-5"}>
                    {teamEl.facebookUrl && (
                      <Link href={teamEl.facebookUrl}>
                        <svg
                          width="11"
                          height="20"
                          viewBox="0 0 11 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                            className={"fill-primary"}
                          />
                        </svg>
                      </Link>
                    )}
                    {teamEl.twitterUrl && (
                      <Link href={teamEl.twitterUrl}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1_10"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="14"
                            height="14"
                          >
                            <path d="M0 0H14V14H0V0Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0_1_10)">
                            <path
                              d="M11.025 0.656H13.172L8.482 6.03L14 13.344H9.68L6.294 8.909L2.424 13.344H0.275L5.291 7.594L0 0.657H4.43L7.486 4.71L11.025 0.656ZM10.27 12.056H11.46L3.78 1.877H2.504L10.27 12.056Z"
                              className={"fill-primary"}
                            />
                          </g>
                        </svg>
                      </Link>
                    )}
                    {teamEl.instagramUrl && (
                      <Link href={teamEl.instagramUrl}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 9C1 5.229 1 3.343 2.172 2.172C3.344 1.001 5.229 1 9 1H11C14.771 1 16.657 1 17.828 2.172C18.999 3.344 19 5.229 19 9V11C19 14.771 19 16.657 17.828 17.828C16.656 18.999 14.771 19 11 19H9C5.229 19 3.343 19 2.172 17.828C1.001 16.656 1 14.771 1 11V9Z"
                            className={"stroke-primary"}
                            strokeWidth="2"
                          />
                          <path
                            d="M14.5 7C15.3284 7 16 6.32843 16 5.5C16 4.67157 15.3284 4 14.5 4C13.6716 4 13 4.67157 13 5.5C13 6.32843 13.6716 7 14.5 7Z"
                            className={"fill-primary"}
                          />
                          <path
                            d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                            stroke="black"
                            className={"stroke-primary"}
                            strokeWidth="2"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
