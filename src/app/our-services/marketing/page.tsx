import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={"box mt-[50px]"}>
      <div
        className={"flex justify-between items-center gap-5 max-sm:flex-col"}
      >
        <div className={"w-1/2 max-sm:w-full"}>
          <h1 className={"text-[54px] text-primary font-semibold"}>
            Marketing
          </h1>
          <p className={"text-[20px] text-gray-500"}>
            AKİAB həm də bir çox vasitələrlə partnyorlarının bizneslərini
            tanıtması üçün dəstək olur. AKİAB-ın əsasən aşağıdakı vasitələrlə
            şirkətlərin reklamını və tanıtımını həyata keçirir.
          </p>
        </div>
        <div className={"w-1/2 flex flex-col gap-5 max-sm:w-full"}>
          <div className={"flex gap-10 max-sm:flex-col max-sm:gap-5"}>
            <Image
              src={"/marketing1.png"}
              alt={"marketing"}
              width={100}
              height={100}
              className={"mt-5 w-[90px] h-[90px]"}
            />
            <div>
              <h2 className={"text-[32px] font-medium text-primary mb-3"}>
                Kişilər Klubu
              </h2>
              <p className={"text-gray-500"}>
                Kişilər Klubu pandemiya vaxtı “Evdar Kişilər Klubu” adıyla
                açılan və qısa zaman ərzində populyarlaşan, sadəcə kişilərin üzv
                ola biləcəyi qapalı Facebook qrupudur. Vətən müharibəsi
                başladıqdan sonra isə adını “Kişilər Klubu” olaraq dəyişdirən
                qrup, yarandığı ilk gündən qarşılıqlı faydalılıq prinsipinə
                əsaslanaraq öz üzvlərinə bir çox sahədə dəstək olmağı bacarmış
                və qısa zaman ərzində 83 mindən çox üzvə çatmışdır. Qrup
                üzvlərinin ilk gündən aktivliyini qoruyub saxlaması qrupda
                effektiv reklam imkanlarını yaratmışdır. Kişilər Klubunda reklam
                yerləşdirmə haqqı isə sadəcə AKİAB partnyorları üçün mümkündür.
              </p>
            </div>
          </div>
          <div className={"flex gap-10 max-sm:flex-col max-sm:gap-5"}>
            <Image
              src={"/marketing1.png"}
              alt={"marketing"}
              width={100}
              height={100}
              className={"mt-5 w-[90px] h-[90px]"}
            />
            <div>
              <h2 className={"text-[32px] font-medium text-primary mb-3"}>
                AKİAB
              </h2>
              <p className={"text-gray-500"}>
                AKİAB partnyorlarının həm Facebook, həm də Intagram vasitəsilə
                izləyicilərə çatdırılması və tanıtımını etmək imkanı
              </p>
            </div>
          </div>
          <div className={"flex gap-10 max-sm:flex-col max-sm:gap-5"}>
            <Image
              src={"/marketing2.png"}
              alt={"marketing"}
              width={100}
              height={100}
              className={"mt-5 w-[90px] h-[90px]"}
            />
            <div>
              <h2 className={"text-[32px] font-medium text-primary mb-3"}>
                Web sayt
              </h2>
              <p className={"text-gray-500"}>
                Partnyorlar haqqında ətraflı məlumatların, AKİAB-ın fəaliyyət
                növlərinin və digər məlumatların yer aldığı sayt eyni zamanda
                partnyorlar üçün tanıtım və reklam üçün də faydalıdır
              </p>
            </div>
          </div>
          <div className={"flex gap-10 max-sm:flex-col max-sm:gap-5"}>
            <Image
              src={"/marketing3.png"}
              alt={"marketing"}
              width={100}
              height={100}
              className={"mt-5 w-[90px] h-[90px]"}
            />
            <div>
              <h2 className={"text-[32px] font-medium text-primary mb-3"}>
                Mobil Tətbiq
              </h2>
              <p className={"text-gray-500"}>
                AKİAB mobil tətbiq vasitəsilə də öz partnyorlarının tanıtımını
                həyata keçirir. Belə ki, şirkətlər özləri haqqında məlumat
                yerləşdirməklə yanaşı, mobil tətbiq vasitəsilə kompaniyalar,
                elanlar və.s haqqında istifadəçilərə bildiriş göndərmə imkanı da
                əldə edə bilirlər.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
