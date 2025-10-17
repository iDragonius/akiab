import { BlocksContent, Seo } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { slug } from "@/utils/slug";

async function getActivities(id: string): Promise<{
  data: {
    id: number;
    key: string;
    name: string;
    activities: {
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
  };
}> {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/activity-categories/${id}`,
  );
  url.searchParams.append("populate[0]", "activities");
  url.searchParams.append("populate[1]", "activities.image");
  url.searchParams.append("populate[2]", "activities.seo");

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
    categoryId: string;
    categoryKey: string;
  };
}) {
  const { categoryId } = params;
  const { data } = await getActivities(categoryId);
  console.log(data);
  if (!data) notFound();
  return (
    <div className={"box"}>
      <div className={"box"}>
        <h1
          className={
            "text-center text-primary font-semibold text-[32px] my-[50px]"
          }
        >
          {data.name}
        </h1>
        <div
          className={
            "grid grid-cols-4 gap-5 w-full max-sm:grid-cols-1 max-sm:gap-8"
          }
        >
          {data.activities.map((newsElement) => (
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
                    "text-primary font-semibold  text-[18px] mb-3  text-left h-[54px] line-clamp-2"
                  }
                >
                  {newsElement.title}
                </h2>
                <p className={"line-clamp-3 text-[#9b9b9b] text-[14px]"}>
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
    </div>
  );
}
