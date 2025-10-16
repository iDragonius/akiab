import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  contact: {
    data: {
      address: string;
      phone1: string;
      phone2: string;
      email: string;
      socials: {
        facebookUrl: string;
        instagramUrl: string;
        linkedinUrl: string;
        youtubeUrl: string;
      };
    };
  };
}

export const Footer: FC<FooterProps> = ({ contact }) => {
  console.log(contact);
  return (
    <div className={"w-full bg-primary text-white mt-[50px]"}>
      <div className={"box flex justify-between py-5"}>
        <div>
          <Image
            src={"/logo-white.png"}
            alt={"logo"}
            height={200}
            width={200}
            className={"h-[50px] w-[200px] -ml-5"}
          />
          <div className={"mt-10 flex gap-4 items-center"}>
            <Link
              href={contact.data.socials.facebookUrl}
              className={
                "flex items-center justify-center bg-white rounded-full w-8 h-8"
              }
            >
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
            <Link
              href={contact.data.socials.instagramUrl}
              className={
                "flex items-center justify-center bg-white rounded-full w-8 h-8"
              }
            >
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
                  stroke-width="2"
                />
                <path
                  d="M14.5 7C15.3284 7 16 6.32843 16 5.5C16 4.67157 15.3284 4 14.5 4C13.6716 4 13 4.67157 13 5.5C13 6.32843 13.6716 7 14.5 7Z"
                  className={"fill-primary"}
                />
                <path
                  d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                  stroke="black"
                  stroke-width="2"
                  className={"stroke-primary"}
                />
              </svg>
            </Link>
            <Link
              href={contact.data.socials.youtubeUrl}
              className={
                "flex items-center justify-center bg-white rounded-full w-8 h-8"
              }
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                  fill="#3B99E0"
                />
              </svg>
            </Link>
            <Link
              href={contact.data.socials.linkedinUrl}
              className={
                "flex items-center justify-center bg-white rounded-full w-8 h-8"
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                  fill="#3B99E0"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={"flex gap-10"}>
          <div className={"flex flex-col gap-2 "}>
            <h2 className={"text-[24px] font-semibold mb-1"}>Son Keçidlər</h2>
            <Link href="/gallery/images">Şəkillər</Link>
            <Link href="/gallery/videos">Videolar</Link>
            <Link href="/trainings">Təlimlər</Link>
            <Link href="/news">Xəbərlər</Link>
          </div>{" "}
          <div className={"flex flex-col gap-2 "}>
            <h2 className={"text-[24px] font-semibold mb-1"}>Əlaqə</h2>

            <div className={"inline"}>
              <svg
                width="16"
                className={"inline mb-1"}
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16V7C0 6.68333 0.0709998 6.38333 0.213 6.1C0.355 5.81667 0.550667 5.58333 0.8 5.4L6.8 0.9C7.15 0.633333 7.55 0.5 8 0.5C8.45 0.5 8.85 0.633333 9.2 0.9L15.2 5.4C15.45 5.58333 15.646 5.81667 15.788 6.1C15.93 6.38333 16.0007 6.68333 16 7V16C16 16.55 15.804 17.021 15.412 17.413C15.02 17.805 14.5493 18.0007 14 18H11C10.7167 18 10.4793 17.904 10.288 17.712C10.0967 17.52 10.0007 17.2827 10 17V12C10 11.7167 9.904 11.4793 9.712 11.288C9.52 11.0967 9.28267 11.0007 9 11H7C6.71667 11 6.47933 11.096 6.288 11.288C6.09667 11.48 6.00067 11.7173 6 12V17C6 17.2833 5.904 17.521 5.712 17.713C5.52 17.905 5.28267 18.0007 5 18H2C1.45 18 0.979333 17.8043 0.588 17.413C0.196666 17.0217 0.000666667 16.5507 0 16Z"
                  fill="white"
                />
              </svg>
              <span className={"ml-1 "}>{contact.data.address}</span>
            </div>
            <div className={"inline"}>
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                className={"inline mb-1"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.552 20.133C14.112 20.08 10.031 19.516 5.757 15.243C1.484 10.969 0.921 6.889 0.867 5.448C0.787 3.252 2.469 1.119 4.412 0.286002C4.64598 0.184969 4.9022 0.146502 5.15553 0.174377C5.40886 0.202252 5.65059 0.295511 5.857 0.445002C7.457 1.611 8.561 3.375 9.509 4.762C9.71758 5.06673 9.80677 5.43755 9.75956 5.8038C9.71235 6.17005 9.53204 6.50613 9.253 6.748L7.302 8.197C7.20774 8.26507 7.14139 8.36503 7.11528 8.47832C7.08916 8.59162 7.10505 8.71054 7.16 8.813C7.602 9.616 8.388 10.812 9.288 11.712C10.188 12.612 11.441 13.45 12.3 13.942C12.4077 14.0025 12.5345 14.0194 12.6543 13.9892C12.774 13.9591 12.8777 13.8842 12.944 13.78L14.214 11.847C14.4475 11.5368 14.7919 11.3291 15.1752 11.2672C15.5584 11.2053 15.9508 11.2941 16.27 11.515C17.677 12.489 19.319 13.574 20.521 15.113C20.6826 15.3209 20.7854 15.5684 20.8187 15.8296C20.8519 16.0909 20.8144 16.3562 20.71 16.598C19.873 18.551 17.755 20.214 15.552 20.133Z"
                  fill="white"
                />
              </svg>

              <span className={"ml-1 "}>{contact.data.phone1}</span>
            </div>
            <div className={"inline"}>
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                className={"inline mb-1"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.552 20.133C14.112 20.08 10.031 19.516 5.757 15.243C1.484 10.969 0.921 6.889 0.867 5.448C0.787 3.252 2.469 1.119 4.412 0.286002C4.64598 0.184969 4.9022 0.146502 5.15553 0.174377C5.40886 0.202252 5.65059 0.295511 5.857 0.445002C7.457 1.611 8.561 3.375 9.509 4.762C9.71758 5.06673 9.80677 5.43755 9.75956 5.8038C9.71235 6.17005 9.53204 6.50613 9.253 6.748L7.302 8.197C7.20774 8.26507 7.14139 8.36503 7.11528 8.47832C7.08916 8.59162 7.10505 8.71054 7.16 8.813C7.602 9.616 8.388 10.812 9.288 11.712C10.188 12.612 11.441 13.45 12.3 13.942C12.4077 14.0025 12.5345 14.0194 12.6543 13.9892C12.774 13.9591 12.8777 13.8842 12.944 13.78L14.214 11.847C14.4475 11.5368 14.7919 11.3291 15.1752 11.2672C15.5584 11.2053 15.9508 11.2941 16.27 11.515C17.677 12.489 19.319 13.574 20.521 15.113C20.6826 15.3209 20.7854 15.5684 20.8187 15.8296C20.8519 16.0909 20.8144 16.3562 20.71 16.598C19.873 18.551 17.755 20.214 15.552 20.133Z"
                  fill="white"
                />
              </svg>

              <span className={"ml-1 "}>{contact.data.phone2}</span>
            </div>
            <div className={"inline"}>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                className={"inline mb-1"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z"
                  fill="white"
                />
              </svg>

              <span className={"ml-1 "}>{contact.data.email}</span>
            </div>
            <Link
              href={"https://genc.akiab.az/"}
              className={
                "flex px-3 py-1 bg-white text-primary rounded-[6px] mt-4 w-max"
              }
            >
              Gənc AKİAB
            </Link>
          </div>
        </div>
      </div>
      <div className={"py-3 border-t border-white w-full "}>
        <div className={"box flex justify-end"}>
          <p>AKİAB |© Bütün hüquqlar qorunur 2025</p>
        </div>
      </div>
    </div>
  );
};
