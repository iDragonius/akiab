import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={"box"}>
      <h1
        className={
          "text-center text-primary font-semibold text-[32px] my-[50px] max-sm:text-[24px]"
        }
      >
        Xidmətlərimiz
      </h1>
      <div
        className={
          "grid grid-cols-5 gap-5 w-full max-lg:grid-cols-3 max-sm:grid-cols-1"
        }
      >
        <div className={"group border border-gray-200"}>
          <div
            className={
              "opacity-60 h-[200px] flex flex-col gap-4 items-center justify-center bg-primary group-hover:opacity-100 transition-opacity ease-in-out"
            }
          >
            <Image src={"/b2b.png"} alt={"b2b"} height={100} width={100} />
            <p className={"text-white text-[24px] font-semibold"}>B2B</p>
          </div>
          <div className={"h-[200px] w-full flex items-center justify-center"}>
            <Link
              href={"/our-services/b2b"}
              className={
                "border border-primary rounded-[6px] text-[20px] font-semibold px-3 py-1 text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              }
            >
              Ətraflı
            </Link>
          </div>
        </div>
        <div className={"group border border-gray-200"}>
          <div
            className={
              "opacity-60  h-[200px] flex flex-col gap-4 items-center justify-center bg-primary group-hover:opacity-100 transition-opacity ease-in-out"
            }
          >
            <Image src={"/b2c.png"} alt={"b2c"} height={100} width={100} />
            <p className={"text-white text-[24px] font-semibold"}>B2C</p>
          </div>
          <div className={"h-[200px] w-full flex items-center justify-center"}>
            <Link
              href={"/our-services/b2c"}
              className={
                "border border-primary rounded-[6px] text-[20px] font-semibold px-3 py-1 text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              }
            >
              Ətraflı
            </Link>
          </div>
        </div>
        <div className={"group border border-gray-200"}>
          <div
            className={
              "opacity-60 h-[200px] flex flex-col gap-4 items-center justify-center bg-primary group-hover:opacity-100 transition-opacity ease-in-out"
            }
          >
            <Image
              src={"/marketing.png"}
              alt={"b2b"}
              height={100}
              width={100}
            />
            <p className={"text-white text-[24px] font-semibold"}>Marketing</p>
          </div>
          <div className={"h-[200px] w-full flex items-center justify-center"}>
            <Link
              href={"/our-services/marketing"}
              className={
                "border border-primary rounded-[6px] text-[20px] font-semibold px-3 py-1 text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              }
            >
              Ətraflı
            </Link>
          </div>
        </div>
        <div className={"group border border-gray-200"}>
          <div
            className={
              "opacity-60 h-[200px] flex flex-col gap-4 items-center justify-center bg-primary group-hover:opacity-100 transition-opacity ease-in-out"
            }
          >
            <Image src={"/academy.png"} alt={"b2b"} height={100} width={100} />
            <p className={"text-white text-[24px] font-semibold"}>
              AKİAB Academiya
            </p>
          </div>
          <div className={"h-[200px] w-full flex items-center justify-center"}>
            <Link
              href={"/academy"}
              className={
                "border border-primary rounded-[6px] text-[20px] font-semibold px-3 py-1 text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              }
            >
              Ətraflı
            </Link>
          </div>
        </div>
        <div className={"group border border-gray-200"}>
          <div
            className={
              "opacity-60 h-[200px] flex flex-col gap-4 items-center justify-center bg-primary group-hover:opacity-100 transition-opacity ease-in-out"
            }
          >
            <Image src={"/people.png"} alt={"b2b"} height={100} width={100} />
            <p className={"text-white text-[24px] font-semibold"}>
              Sosial fəaliyyətlər
            </p>
          </div>
          <div className={"h-[200px] w-full flex items-center justify-center"}>
            <Link
              href={"/our-services/social-activities"}
              className={
                "border border-primary rounded-[6px] text-[20px] font-semibold px-3 py-1 text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              }
            >
              Ətraflı
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
