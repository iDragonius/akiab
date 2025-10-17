import Image from "next/image";
import { BlocksContent, Seo } from "@/types";
import Link from "next/link";
import { slug } from "@/utils/slug";

async function getTeam(): Promise<{
  data: {
    id: number;
    fullName: string;
    image: {
      url: string;
    };
    position: string;
    facebookUrl: string | null;
    instagramUrl: string | null;
    twitterUrl: string | null;
  }[];
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
  url.searchParams.append("populate[0]", "image");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function Page() {
  const { data } = await getTeam();
  console.log(data);
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px]"
        }
      >
        İdarə Heyəti
      </h1>
      <div
        className={
          "grid grid-cols-3 gap-5 w-full max-sm:grid-cols-1 max-sm:gap-8"
        }
      >
        {data.map((team) => (
          <div key={team.id} className={"flex flex-col items-center group "}>
            <Image
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + team.image.url}
              alt={team?.fullName}
              width={256}
              height={256}
              className={
                "rounded-[24px]  object-cover group-hover:-translate-y-3 transition-all ease-in-out"
              }
            />
            <div
              className={
                "bg-primary w-full h-[150px] rounded-[24px] flex items-center justify-center"
              }
            >
              <div
                className={
                  "h-[150px] bg-white text-primary w-[calc(100%-30px)] rounded-[24px] p-4 flex flex-col items-center group-hover:-translate-y-3 transition-all ease-in-out"
                }
              >
                <h2 className={"text-[20px] font-semibold mb-2"}>
                  {team.fullName}
                </h2>
                <p className={"font-medium"}>{team.position}</p>
                <div className={"flex  gap-5 mt-5"}>
                  {team.facebookUrl && (
                    <Link href={team.facebookUrl}>
                      <svg
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                          className={"fill-primary"}
                        />
                      </svg>
                    </Link>
                  )}
                  {team.twitterUrl && (
                    <Link href={team.twitterUrl}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_1_10"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="14"
                          height="14"
                        >
                          <path d="M0 0H14V14H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1_10)">
                          <path
                            d="M11.025 0.656H13.172L8.482 6.03L14 13.344H9.68L6.294 8.909L2.424 13.344H0.275L5.291 7.594L0 0.657H4.43L7.486 4.71L11.025 0.656ZM10.27 12.056H11.46L3.78 1.877H2.504L10.27 12.056Z"
                            className={"fill-primary"}
                          />
                        </g>
                      </svg>
                    </Link>
                  )}
                  {team.instagramUrl && (
                    <Link href={team.instagramUrl}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9C1 5.229 1 3.343 2.172 2.172C3.344 1.001 5.229 1 9 1H11C14.771 1 16.657 1 17.828 2.172C18.999 3.344 19 5.229 19 9V11C19 14.771 19 16.657 17.828 17.828C16.656 18.999 14.771 19 11 19H9C5.229 19 3.343 19 2.172 17.828C1.001 16.656 1 14.771 1 11V9Z"
                          className={"stroke-primary"}
                          strokeWidth="2"
                        />
                        <path
                          d="M14.5 7C15.3284 7 16 6.32843 16 5.5C16 4.67157 15.3284 4 14.5 4C13.6716 4 13 4.67157 13 5.5C13 6.32843 13.6716 7 14.5 7Z"
                          className={"fill-primary"}
                        />
                        <path
                          d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                          stroke="black"
                          className={"stroke-primary"}
                          strokeWidth="2"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
