import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getAcademy(): Promise<{
  data: {
    id: number;
    content: string;
    image: {
      url: string;
    };
  };
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/academy`);
  url.searchParams.append("populate[0]", "image");
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
  url.searchParams.set("pagination[limit]", "5");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
export default async function Page() {
  const { data } = await getAcademy();
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
          AKİAB Academy
        </h1>

        <Image
          src={process.env.NEXT_PUBLIC_PUBLIC_URL + data.image.url}
          alt={"Academy"}
          width={1440}
          height={700}
          className={"rounded-[24px]"}
        />
        <h2
          className={"text-primary text-[32px] font-bold text-center  my-10 "}
        >
          Məlumat
        </h2>
        <p
          className={
            "bg-primary text-white rounded-[32px] p-5 text-[18px] mt-5"
          }
        >
          {data.content}
        </p>
        <h2
          className={"text-primary text-[32px] font-bold text-center  my-10 "}
        >
          Tərəfdaşlar
        </h2>
        <div
          className={"grid grid-cols-5 gap-6 items-center max-sm:grid-cols-1"}
        >
          {partners.data.map((partner) => (
            <Link
              href={`/partners/${partner.documentId}/${slug(partner.name)}`}
              key={partner.id}
              className={
                "border border-gray-200 flex flex-col items-center justify-center w-full h-full rounded-[24px] transition-all ease-in-out hover:border-primary "
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
