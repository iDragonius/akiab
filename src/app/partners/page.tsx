import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

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
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getPartners();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        Tərəfdaşlar{" "}
      </h1>
      <div className={"grid grid-cols-4 gap-5 w-full"}>
        {data.map((partner) => (
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
              className={"rounded-[24px] w-full h-full object-cover"}
            />
            <p className={"text-[20px] font-medium my-1"}>{partner.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
