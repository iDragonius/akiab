import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={"box mt-[50px]"}>
      <div className={"flex justify-between gap-20"}>
        <Image
          src={"/b2bcover.jpg"}
          alt={"b2b"}
          height={315}
          width={400}
          style={{ borderRadius: "50% 20% / 10% 40%" }}
          className={"min-w-[400px]"}
        />
        <div>
          <h1 className={"text-[32px] font-semibold text-primary mb-4"}>
            Business to Business
          </h1>
          <p className={"text-[18px] text-gray-600 font-medium"}>
            AKİAB partnyorluq paketində asılı olaraq öz partnyorları arasında
            aylıq biznes masaları təşkil edir. Görüşlər minimum 20 şirkətin
            iştirakı ilə səhər saatlarında başlayır və birgə səhər yeməyi ilə
            yekunlaşır. Görüşlərdə iştirak edən partnyorlara masadan iş
            götürməklə yanaşı, masaya iş gətirməsi də təşviq edilir. Belə ki,
            biznes masalarda ən çox iş paylaşımı edən və reallaşdıran
            partnyorların statistikası aparılır və il sonunda masa çempionlarına
            müvafiq olaraq ilk 3 yerə Standart, Gold və ya Platinium üzvlük
            paketi hədiyyə edilir. Bu isə öz növbəsində partnyorlar arasında
            biznes masalarından fayda götürməklə yanaşı, faydalı olmaq üçün də
            rəqabət motivasiyası yaradır.
          </p>
        </div>
      </div>

      <div className={"flex gap-10 justify-between  mt-10"}>
        <div
          className={
            "text-white bg-[#1497faa4] p-6 rounded-[12px] flex-1 flex flex-col items-center justify-center shadow-lg"
          }
        >
          <Image
            src={"/standart.png"}
            alt={"standart"}
            width={100}
            height={100}
          />
          <h2 className={"text-[40px] font-semibold mt-8"}>Standart</h2>
        </div>
        <div
          className={
            "text-white bg-[#1497faa4] p-6 rounded-[12px] flex-1  flex flex-col items-center justify-center  shadow-lg"
          }
        >
          <Image src={"/gold.png"} alt={"gold"} width={100} height={100} />
          <h2 className={"text-[40px] font-semibold mt-8"}>Gold</h2>
        </div>
        <div
          className={
            "text-white bg-[#1497faa4] p-6 rounded-[12px] flex-1  flex flex-col items-center justify-center  shadow-lg"
          }
        >
          <Image
            src={"/platinium.png"}
            alt={"platinium"}
            width={100}
            height={100}
          />
          <h2 className={"text-[40px] font-semibold mt-8"}>Platinium</h2>
        </div>
      </div>
    </div>
  );
}
