import { BlocksContent, Seo } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { slug } from "@/utils/slug";
import Image from "next/image";

async function getPartnerById(id: string): Promise<{
  data: {
    id: number;

    name: string;
    logo: {
      url: string;
    };
    instagramUrl: string | null;
    about: string;
    facebookUrl: string | null;
    websiteUrl: string | null;
  };
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/partners/${id}`);

  url.searchParams.append("populate[0]", "logo");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
async function getPartners(): Promise<{
  data: {
    id: number;

    name: string;
    logo: {
      url: string;
    };
    instagramUrl: string | null;
    about: string;
    facebookUrl: string | null;
    websiteUrl: string | null;
    documentId: string;
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
export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const { data } = await getPartnerById(id);
  const otherPartnersData = await getPartners();
  if (!data) notFound();
  return (
    <div className={""}>
      <div className={"bg-gray-100 py-10 "}>
        <div className={"box"}>
          <div className={"flex gap-5"}>
            <Image
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + data.logo.url}
              alt={data.name}
              width={200}
              height={200}
              className={"rounded-[6px] w-[200px] h-[200px] object-cover"}
            />
            <div>
              <h1 className={"text-[32px] font-semibold text-primary"}>
                {data.name}
              </h1>
              <p className={"text-[16px] my-3 text-gray-600"}>{data.about}</p>
              <div className={"flex gap-3"}>
                {data.instagramUrl && (
                  <Link
                    href={data.instagramUrl}
                    target={"_blank"}
                    className={
                      "text-white bg-primary px-3 py-1 rounded-[6px] text-[14px]"
                    }
                  >
                    Instagram
                  </Link>
                )}
                {data.facebookUrl && (
                  <Link
                    href={data.facebookUrl}
                    target={"_blank"}
                    className={
                      "text-white bg-primary px-3 py-1 rounded-[6px] text-[14px]"
                    }
                  >
                    Facebook
                  </Link>
                )}
                {data.websiteUrl && (
                  <Link
                    href={data.websiteUrl}
                    target={"_blank"}
                    className={
                      "text-white bg-primary px-3 py-1 rounded-[6px] text-[14px]"
                    }
                  >
                    Website
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"box mt-10"}>
        <h2 className={"text-[32px] text-primary font-semibold"}>
          Digər Tərəfdaşlar
        </h2>

        <div className={"grid grid-cols-5 gap-6 items-center my-10"}>
          {otherPartnersData.data
            .filter((i) => i.id !== data.id)
            .map((partner) => (
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
    </div>
  );
}
