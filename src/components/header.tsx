"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  navigation: {
    data: {
      navigations: {
        id: number;
        label: string;
        path: string | null;
        navigationStatus: boolean;
        subs: {
          id: number;
          label: string;
          path: string | null;
          navigationStatus: boolean;
          subs: {
            id: number;
            label: string;
            path: string | null;
            navigationStatus: boolean;
          }[];
        }[];
      }[];
    };
  };
}

export const Header: FC<HeaderProps> = ({ navigation }) => {
  return (
    <header
      className={
        "h-[72px] shadow-[0px_0_18px_rgba(55,66,59,0.08)] sticky top-0 z-[10000] bg-white"
      }
    >
      <div className={"box  flex items-center  justify-between h-full"}>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={110} height={30} />
        </Link>
        <div className={"flex gap-5"}>
          {navigation.data.navigations.map((nav) => {
            return <NavigationElement key={nav.id} data={nav} />;
          })}
        </div>
        <Link
          href={"https://register.akiab.az/"}
          className={"bg-primary text-white rounded-[50px] px-4 py-1.5 "}
        >
          Partnyor ol
        </Link>
      </div>
    </header>
  );
};

const NavigationElement = ({
  data,
}: {
  data: {
    id: number;
    label: string;
    path: string | null;
    navigationStatus: boolean;
    subs: {
      id: number;
      label: string;
      path: string | null;
      navigationStatus: boolean;
      subs: {
        id: number;
        label: string;
        path: string | null;
        navigationStatus: boolean;
      }[];
    }[];
  };
}) => {
  const [open, setOpen] = useState<boolean>(false);
  if (data.path) {
    return (
      <Link href={data.path} className={"text-primary font-medium"}>
        {data.label}
      </Link>
    );
  } else {
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={"relative h-full cursor-pointer"}
      >
        <p className={"text-primary font-medium"}>{data.label}</p>
        {open && (
          <div
            className={
              "flex flex-col absolute bg-white  shadow-[0px_0_18px_rgba(55,66,59,0.08)] p-3 gap-3 min-w-max w-[180px] "
            }
          >
            {data.subs.map((sub) => (
              <NavigationSubElement data={sub} key={sub.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
};

const NavigationSubElement = ({
  data,
}: {
  data: {
    id: number;
    label: string;
    path: string | null;
    navigationStatus: boolean;
    subs: {
      id: number;
      label: string;
      path: string | null;
      navigationStatus: boolean;
    }[];
  };
}) => {
  const [open, setOpen] = useState<boolean>(false);

  if (data.path) {
    return (
      <Link href={data.path} className={"text-primary font-medium"}>
        {data.label}
      </Link>
    );
  } else {
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={"relative cursor-pointer"}
      >
        <p className={"text-primary font-medium"}>{data.label}</p>
        {open && (
          <div
            className={
              "flex flex-col absolute -right-20 top-0 bg-white shadow-[0px_0_18px_rgba(55,66,59,0.08)] p-3 gap-2 z-[100]"
            }
          >
            {data.subs.map((sub) => (
              <Link
                href={sub.path as string}
                className={"text-primary text-[15px] "}
                key={sub.id}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
};
