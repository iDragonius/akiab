import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={"box mt-[50px]"}>
      <h1 className={"text-center text-primary font-semibold text-[32px] mb-6"}>
        Business to Consumer
      </h1>
      <p className={"mb-10 text-center text-[18px] text-gray-600 font-medium"}>
        Bizi fərqli edən məhsullardan biri də AKİAB mobil tətbiqi və AKİAB bonus
        kartlarıdır.
      </p>

      <div className={"flex justify-between gap-20"}>
        <Image
          src={"/b2c1.png"}
          alt={"b2b"}
          height={315}
          width={400}
          className={"min-w-[400px]"}
        />
        <div>
          <h1 className={"text-[32px] font-semibold text-primary mb-2"}>
            AKİAB-ın bonus kartları
          </h1>
          <p className={"text-[18px] text-gray-600 font-medium"}>
            Müştərilərə partnyorlarımız tərəfindən pulsuz paylanılır və hər bir
            müştərinin adına bir kart qeydiyyatdan keçirilir. Müştərilər isə
            həmin kartlar vasitəsilə partnyorlarımızın hər birindən aldıqları
            xidmət haqqının müqabilində bonuslar alırlar. Yığılan bonuslar isə
            AKİAB partnyorlarının hər birində istifadə edilə bilər. AKİAB eyni
            zamanda partnyorlarına öz loyallıq kartlarını da çıxarmağa imkan
            verir. Belə ki, hər şirkət üzərində öz loqosu olan loyallıq
            kartlarını öz müştərilərinə verməklə onları həm özəl hiss etdirməyi,
            həm də sadəcə onlardan deyil, AKİAB-a üzv olan digər partnyorlardan
            da bonus qazanmaq imkanı qazandırır.
          </p>
        </div>
      </div>

      <h2 className={"text-[32px] font-semibold text-primary mb-2 mt-20"}>
        AKİAB Mobil Tətbiqi
      </h2>
      <p className={"  text-[18px] text-gray-600 font-medium"}>
        Mobil tətbiq kart sahibi olan bütün müştərilərin rahat istifadəsi üçün
        nəzərdə tutulmuşdur. Tətbiqin əsas funksiyaları aşağıdakılardır.
      </p>
      <div className={"flex justify-center gap-40 mt-20 items-center"}>
        <Image
          src={"/b2c2.webp"}
          alt={"b2b"}
          height={315}
          width={400}
          className={"min-w-[250px] w-[250px]"}
        />
        <div className={"max-w-[500px] w-[500px]"}>
          <h1 className={"text-[32px] font-semibold text-primary mb-2"}>
            Online kataloq
          </h1>
          <p className={"text-[22px] text-primary opacity-75  "}>
            Bütün partnyorları bir arada görmək, haqqında məlumat toplamaq və
            hər birindən ayrı-ayrılıqda bonus faizlərini öyrənmək funksiyası
            daşıyır.
          </p>
        </div>
      </div>
      <div className={"flex justify-center gap-40 mt-20 items-center"}>
        <div className={"max-w-[500px] w-[500px]"}>
          <h1 className={"text-[32px] font-semibold text-primary mb-2"}>
            Şirkətlər haqqında məlumat
          </h1>
          <p className={"text-[22px] text-primary opacity-75  "}>
            İstifadəçilər tətbiq vasitəsilə AKİAB partnyorlarının fəaliyyət
            növləri, yerləşdiyi ünvana xəritə vasitəsilə getmə imkanı, telefon
            nömrəsi, sosial media hesabları, mail və.s məlumatları alma imkanı
            qazanır.
          </p>
        </div>
        <Image
          src={"/b2c3.webp"}
          alt={"b2b"}
          height={315}
          width={400}
          className={"min-w-[250px] w-[250px]"}
        />
      </div>
      <div className={"flex justify-center gap-40 mt-20 items-center"}>
        <Image
          src={"/b2c4.webp"}
          alt={"b2b"}
          height={315}
          width={400}
          className={"min-w-[250px] w-[250px]"}
        />
        <div className={"max-w-[500px] w-[500px]"}>
          <h1 className={"text-[32px] font-semibold text-primary mb-2"}>
            Ətraflı axtarış
          </h1>
          <p className={"text-[22px] text-primary opacity-75  "}>
            İstifadəçilərin fəaliyyət sahələrinə görə, şirkət adına görə və ya
            açar sözlərə görə axtarış etmə imkanları mövcuddur.
          </p>
        </div>
      </div>
      <div className={"flex justify-center gap-40 mt-20 items-center"}>
        <div className={"max-w-[500px] w-[500px]"}>
          <h1 className={"text-[32px] font-semibold text-primary mb-2"}>
            Sorğu-cavab
          </h1>
          <p className={"text-[22px] text-primary opacity-75  "}>
            Bu funksiya vasitəsilə istifadəçilər ehtiyacları olan xidmətə əsasən
            mini tender elan edə bilirlər. Belə ki, istifadəçi filtr bölməsindən
            sorğusuna müvafiq olan fəaliyyət növünü seçir, mətn bölməsində almaq
            istədiyi məhsul və xidmət haqqında məlumatı yazır, əgər varsa
            məhsulun şəklini və ya digər detallarını sorğuya əlavə edə bilir,
            sorğunun cavablanması üçün son tarix qoyub göndərə bilir. Bu zaman
            seçilən fəaliyyət sahəsinə uyğun olaraq AKİAB partnyorlarından həmin
            sahə üzrə fəaliyyət göstərən şirkətlərə bildiriş daxil olur və öz
            təkliflərini müştəriyə göndərə bilirlər. Bu isə biznes və müştərilər
            arasında şəffaf şəkildə operativ əlaqələrin qurulmasını xeyli
            asanlaşdırır.
          </p>
        </div>
        <Image
          src={"/b2c5.webp"}
          alt={"b2b"}
          height={315}
          width={400}
          className={"min-w-[250px] w-[250px]"}
        />
      </div>
    </div>
  );
}
