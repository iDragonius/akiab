import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getNews(): Promise<{
  data: {
    id: number;
    documentId: string;
    title: string;
    image: {
      url: string;
    }[];
    content: BlocksContent;
    description: string;
    seo: Seo;
    publishDate: string;
    activity_category: {
      id: number;
      name: string;
      key: string;
    };
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/activities`);
  url.searchParams.append("populate[0]", "seo");
  url.searchParams.append("populate[1]", "seo.shareImage");
  url.searchParams.append("populate[2]", "image");
  url.searchParams.append("populate[3]", "activity_category");
  url.searchParams.set("sort", "publishDate:desc");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getNews();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        Xəbərlər
      </h1>
      <div className={"grid grid-cols-4 gap-5 w-full"}>
        {data.map((newsElement) => (
          <div key={newsElement.id} className={"border border-gray-200"}>
            <Image
              src={
                process.env.NEXT_PUBLIC_PUBLIC_URL + newsElement.image[0].url
              }
              alt={""}
              width={300}
              height={300}
              className={"h-[200px]"}
            />
            <div className={"p-4"}>
              <p className={"text-[14px] text-primary mb-3"}>
                {newsElement.publishDate}
              </p>
              <h2
                className={
                  "text-primary font-semibold h-[54px] line-clamp-2 text-[18px] mb-3  text-left"
                }
              >
                {newsElement.title}
              </h2>
              <p
                className={"line-clamp-3 text-[#9b9b9b] text-[14px] h-[63px] "}
              >
                {newsElement.description}
              </p>
              <Link
                href={`/news/${newsElement.documentId}/${slug(newsElement.title)}`}
                className={
                  "text-white bg-primary font-medium mt-3 flex w-max px-4 rounded-[6px]  "
                }
              >
                Ətrfalı
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
