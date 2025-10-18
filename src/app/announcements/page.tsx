import Image from "next/image";
import { BlocksContent } from "@/types";

async function getAnnouncements(): Promise<{
  data: {
    title: string;
    id: number;
    image: {
      url: string;
    };
    content: BlocksContent;
  }[];
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements?populate[image]=true`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch announcements");
  return res.json();
}

export default async function Page() {
  const { data } = await getAnnouncements();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        Elanlar
      </h1>
      <div
        className={
          "grid grid-cols-4 gap-5 w-full max-sm:grid-cols-1  max-sm:gap-7"
        }
      >
        {data.map((announcement) => (
          <div key={announcement.id} className={"border border-gray-200"}>
            <Image
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + announcement.image.url}
              alt={""}
              width={300}
              height={300}
              className={"w-full h-[300px] object-cover "}
            />
            <div className={"p-4"}>
              <h2
                className={
                  "text-primary font-semibold text-center text-[18px] mb-4 "
                }
              >
                {announcement.title}
              </h2>
              {announcement.content.map((content, k) => (
                <div key={k}>
                  {content.children.map((row, i) => (
                    <p
                      key={i}
                      className={"text-primary text-[14px] font-medium"}
                    >
                      {" "}
                      {row.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
