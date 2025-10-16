import { BlocksContent, Seo } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { slug } from "@/utils/slug";
import Image from "next/image";

async function getNewsById(id: string): Promise<{
  data: {
    id: number;

    title: string;
    image: {
      url: string;
    }[];
    content: BlocksContent;
    description: string;
    seo: Seo;
    publishDate: string;
  };
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/activities/${id}`);
  url.searchParams.append("populate[0]", "seo");
  url.searchParams.append("populate[1]", "seo.shareImage");
  url.searchParams.append("populate[2]", "image");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
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
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/activities`);

  url.searchParams.append("populate[0]", "seo");
  url.searchParams.append("populate[1]", "seo.shareImage");
  url.searchParams.append("populate[2]", "image");

  url.searchParams.set("sort", "publishDate:desc");
  url.searchParams.set("pagination[limit]", "3");

  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const { data } = await getNewsById(id);
  const otherNewsData = await getNews();
  if (!data) notFound();
  return (
    <div className={"box"}>
      <div className={"flex justify-between mt-[50px] gap-10"}>
        <div>
          <div className={" text-[20px] "}>
            <Link href={"/"} className={"text-primary"}>
              Ana səhifə
            </Link>
            <span className={"mx-2"}>/</span>
            <Link href={"/news"} className={"text-primary"}>
              Xəbərlər
            </Link>
            <span className={"mx-2"}>/</span>
            <span className={"text-gray-500"}>{data.title}</span>
          </div>
          <h1 className={" text-primary font-semibold text-[40px] "}>
            {data.title}
          </h1>
          <p className={"text-[14px] font-semibold text-primary"}>
            {" "}
            {data?.publishDate?.split("-")?.reverse()?.join(".")}
          </p>

          <Image
            src={process.env.NEXT_PUBLIC_PUBLIC_URL + data.image[0].url}
            alt={""}
            width={500}
            height={500}
            className={"rounded-[12px] w-full my-8"}
          />

          <div>
            {data.content.map((content, k) => (
              <div key={k} className={"mb-4"}>
                {content.children.map((row, i) => (
                  <p key={i} className={" text-[18px] font-medium mb-2"}>
                    {" "}
                    {row.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={"min-w-[400px]"}>
          <h2 className={"text-primary text-[24px]"}>Bənzər paylaşımlar</h2>
          <div className={"flex flex-col gap-3 mt-4"}>
            {otherNewsData.data.map((newsElement) => (
              <Link
                key={newsElement.id}
                href={`/news/${newsElement.documentId}/${slug(newsElement.title)}`}
                className={"flex gap-4"}
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_PUBLIC_URL +
                    newsElement.image[0].url
                  }
                  alt={""}
                  width={180}
                  height={180}
                  className={"rounded-[12px]"}
                />

                <div>
                  <h3>{newsElement.title}</h3>
                  <p className={"text-[12px] mt-1"}>
                    {newsElement?.publishDate?.split("-")?.reverse()?.join(".")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
