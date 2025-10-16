import Image from "next/image";

async function getBonusCards(): Promise<{
  data: {
    id: number;
    image: {
      url: string;
    };
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/bonus-cards`);
  url.searchParams.append("populate[0]", "image");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getBonusCards();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        Bonus Kartları{" "}
      </h1>
      <div className={"grid grid-cols-4 gap-5 w-full"}>
        {data.map((bonusCard) => (
          <div
            key={bonusCard.id}
            className={" transform perspective-[200px] rotate-y-12  "}
          >
            <Image
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + bonusCard.image.url}
              alt={"bonus card " + bonusCard.id}
              width={300}
              height={300}
              className={
                "rounded-[24px] w-full h-full object-cover  transform perspective-[800px] rotate-y-6 "
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
