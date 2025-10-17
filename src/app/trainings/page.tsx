import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getTrainings(): Promise<{
  data: {
    id: number;
    documentId: string;
    title: string;
    image: {
      url: string;
    };
    content: BlocksContent;
    description: string;
    category: string;
    date: string;
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/trainings`);
  // url.searchParams.append("populate[0]", "seo");
  // url.searchParams.append("populate[1]", "seo.shareImage");
  url.searchParams.append("populate[2]", "image");
  url.searchParams.set("sort", "date:desc");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getTrainings();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        Təlimlər
      </h1>
      <div
        className={
          "grid grid-cols-4 gap-5 w-full max-sm:grid-cols-1 max-sm:gap-8"
        }
      >
        {data.map((training) => (
          <div key={training.id} className={"border border-gray-200"}>
            <Image
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + training.image.url}
              alt={""}
              width={300}
              height={300}
            />
            <div className={"p-4"}>
              <div className="flex justify-between">
                <p className={"text-[14px] text-primary mb-3"}>
                  {training.date}
                </p>
                <p className={"text-[14px] text-gray-500"}>
                  {training.category === "Other" ? "Digər" : "AKİAB Akademiya"}
                </p>
              </div>

              <h2
                className={
                  "text-primary font-semibold text-left text-[18px] mb-3 h-[54px] line-clamp-2"
                }
              >
                {training.title}
              </h2>
              <p className={"line-clamp-3 text-[#9b9b9b] text-[14px] h-[63px]"}>
                {training.description}
              </p>
              <Link
                href={`/trainings/${training.documentId}/${slug(training.title)}`}
                className={
                  "text-white bg-primary font-medium mt-3 flex w-max px-4 rounded-[6px]   "
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
