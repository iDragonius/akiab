import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getImages(): Promise<{
  data: {
    id: number;
    title: string;
    image: {
      url: string;
    };
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/images`);
  url.searchParams.append("populate[0]", "image");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getImages();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        Şəkillər{" "}
      </h1>
      <div
        className={
          "grid grid-cols-4 gap-5 w-full max-sm:grid-cols-1  max-sm:gap-7"
        }
      >
        {data.map((image, i) => {
          if (image.title) {
            return (
              <Link
                href={image.title}
                key={image.id}
                target="_blank"
                className={
                  "border border-gray-200 flex items-center justify-center w-full h-full rounded-[24px]"
                }
              >
                <Image
                  src={process.env.NEXT_PUBLIC_PUBLIC_URL + image.image.url}
                  alt={String(image.id)}
                  width={300}
                  height={300}
                  className={"rounded-[24px] w-full h-full object-cover"}
                />
              </Link>
            );
          } else {
            return (
              <div
                key={image.id}
                className={
                  "border border-gray-200 flex items-center justify-center w-full h-full rounded-[24px]"
                }
              >
                <Image
                  src={process.env.NEXT_PUBLIC_PUBLIC_URL + image.image.url}
                  alt={String(image.id)}
                  width={300}
                  height={300}
                  className={"rounded-[24px] w-full h-full object-cover"}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
