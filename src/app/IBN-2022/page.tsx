import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getAbout(): Promise<{
  data: {
    id: number;
    title: string;
    description: string | null;
    videoUrl: string;
  };
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/ibn-2022`);
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
async function getPartners(): Promise<{
  data: {
    id: number;
    documentId: string;
    name: string;
    instagramUrl: string | null;
    websiteUrl: string | null;
    facebookUrl: string | null;
    about: string | null;
    logo: {
      url: string;
    };
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/partners`);
  url.searchParams.append("populate[0]", "logo");
  url.searchParams.set("pagination[limit]", "3");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
export default async function Page() {
  const { data } = await getAbout();
  const partners = await getPartners();
  console.log(data);
  return (
    <>
      <div className={"box "}>
        <h1
          className={
            "text-center text-primary font-semibold text-[32px] my-[50px]"
          }
        >
          IBN-2022
        </h1>

        <iframe
          width="300"
          height="505"
          src={data.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={"w-full rounded-[24px]"}
        ></iframe>
        <h2
          className={"text-primary text-[32px] font-bold text-center  my-10 "}
        >
          {data.title}
        </h2>
        <p
          className={
            "bg-primary text-white rounded-[32px] p-5 text-[18px] mt-5"
          }
        >
          {data.description}
        </p>
        <h2
          className={"text-primary text-[32px] font-bold text-center  my-10 "}
        >
          Tərəfdaşlar
        </h2>
        <div
          className={"grid grid-cols-5 gap-6 items-center  max-sm:grid-cols-1"}
        >
          {partners.data.map((partner) => (
            <Link
              href={`/partners/${partner.documentId}/${slug(partner.name)}`}
              key={partner.id}
              className={
                "border border-gray-200 flex flex-col items-center justify-center w-full h-full rounded-[24px] transition-all ease-in-out hover:border-primary"
              }
            >
              <Image
                src={process.env.NEXT_PUBLIC_PUBLIC_URL + partner.logo.url}
                alt={partner.name}
                width={300}
                height={300}
                className={
                  "rounded-[24px] w-full h-full object-cover max-h-[250px] max-w-[220px]"
                }
              />
              <p className={"text-[20px] font-medium my-1"}>{partner.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
