import Image from "next/image";
import { BlocksContent } from "@/types";

async function getActivities(): Promise<{
  data: {
    name: string;
    id: number;
    image: {
      url: string;
    };
  }[];
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/social-activities?populate[image]=true`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch announcements");
  return res.json();
}

export default async function Page() {
  const { data } = await getActivities();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] mt-[50px] mb-5"
        }
      >
        Sosial Fəaliyyətlər
      </h1>
      <p className={"text-center text-primary text-[18px] mb-10 italic"}>
        AKİAB partnyorlarının vaxtını səmərəli və əyləncəli keçirməsi, eyni
        zamanda partnyorlararası münasibətlərin daha da inkişaf etdirilməsi üçün
        bir sıra sosial fəaliyyətlər də təşkil edir. Sosial fəaliyyətlər Kişilər
        Klubu ilə birgə keçirilir.
      </p>
      <div className={"grid grid-cols-4 gap-5 w-full max-sm:grid-cols-1"}>
        {data.map((announcement) => (
          <div
            key={announcement.id}
            className={
              "border border-gray-200 rounded-[24px] hover:border-primary transition-all ease-in-out"
            }
          >
            <Image
              src={"http://localhost:1337" + announcement.image.url}
              alt={""}
              width={300}
              height={300}
              className={"rounded-t-[24px]"}
            />
            <div className={"p-4"}>
              <h2
                className={
                  "text-primary font-semibold text-center text-[18px] mb-4 "
                }
              >
                {announcement.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
