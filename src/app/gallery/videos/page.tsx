import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getVideos(): Promise<{
  data: {
    id: number;
    title: string;
    videoUrl: string;
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/videos`);

  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getVideos();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        Videolar{" "}
      </h1>
      <div className={"grid grid-cols-3 gap-6 w-full"}>
        {data.map((video) => (
          <div
            key={video.id}
            className={
              "border border-gray-200 flex items-center justify-center w-full h-full rounded-[24px]"
            }
          >
            <iframe
              width="300"
              height="305"
              src={video.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={"w-full rounded-[24px]"}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
