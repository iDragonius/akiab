import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getAbout(): Promise<{
  data: {
    id: number;
    title: string;
    description: string;
    mission: string;
    vision: string;
    values: string;
    videoUrl: string;
  };
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/about`);
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getAbout();
  console.log(data);
  return (
    <>
      <div className={"relative"}>
        <Image
          src={"/about-background.jpg"}
          alt={"about"}
          width={1440}
          height={400}
          className={"w-full max-h-[400px] object-cover "}
        />
        <h1
          className={
            "text-[40px] text-white absolute top-[170px] right-32 font-semibold"
          }
        >
          Haqqımızda
        </h1>
      </div>
      <div className={"box mt-[50px]"}>
        <h2 className={"text-primary text-[32px] underline font-bold"}>
          {data.title}
        </h2>
        <p
          className={
            "bg-primary text-white rounded-[32px] p-5 text-[18px] mt-5"
          }
        >
          {data.description}
        </p>
        <div className={"flex gap-5 mt-10 "}>
          <div
            className={
              "w-full border  border-gray-200 rounded-[24px] py-3 px-4  transition-all ease-in-out hover:shadow-2xl cursor-pointer "
            }
          >
            <h3
              className={
                "text-primary text-center font-semibold text-[20px]  mb-2"
              }
            >
              Missiya
            </h3>
            <p className={"text-gray-700"}>{data.mission}</p>
          </div>{" "}
          <div
            className={
              "w-full border  border-gray-200 rounded-[24px] py-3 px-4   transition-all ease-in-out hover:shadow-2xl cursor-pointer"
            }
          >
            <h3
              className={
                "text-primary text-center font-semibold text-[20px]  mb-2"
              }
            >
              Vizyon
            </h3>
            <p className={"text-gray-700"}>{data.vision}</p>
          </div>
          <div
            className={
              "w-full border  border-gray-200 rounded-[24px] py-3 px-4 transition-all ease-in-out hover:shadow-2xl cursor-pointer "
            }
          >
            <h3
              className={
                "text-primary text-center font-semibold text-[20px]  mb-2"
              }
            >
              Dəyərlər
            </h3>
            <p className={"text-gray-700"}>{data.values}</p>
          </div>
        </div>
        <div
          className={
            "border border-gray-200 flex items-center justify-center w-full h-full rounded-[24px] mt-10"
          }
        >
          <iframe
            width="300"
            height="500"
            src={data.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={"w-full rounded-[24px]"}
          ></iframe>
        </div>
      </div>
    </>
  );
}
