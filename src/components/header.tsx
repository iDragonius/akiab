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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      {mobileMenuOpen && (
        <MobileNavigation
          close={() => setMobileMenuOpen(false)}
          navigation={navigation}
        />
      )}

      <header
        className={
          "h-[72px] shadow-[0px_0_18px_rgba(55,66,59,0.08)] sticky top-0 z-[10000] bg-white"
        }
      >
        <div className={"box  flex items-center  justify-between h-full"}>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={110} height={30} />
          </Link>
          <div className={"flex gap-5 max-sm:hidden"}>
            {navigation.data.navigations.map((nav) => {
              return <NavigationElement key={nav.id} data={nav} />;
            })}
          </div>

          <div className={"flex gap-2 items-center"}>
            <Link
              href={"https://register.akiab.az/"}
              className={
                "bg-primary text-white rounded-[50px] px-4 max-sm:px-2 max-sm:py-1 py-1.5 "
              }
            >
              Partnyor ol
            </Link>
            <button
              className={"min-sm:hidden"}
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H20M2 8H20M2 14H20"
                  stroke="#3B99E0"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

const MobileNavigation = ({
  close,
  navigation,
}: {
  close: () => void;
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
}) => {
  return (
    <div className={"fixed top-0 left-0 z-[1000000] w-full h-full bg-white"}>
      <div className={"flex justify-between box py-5"}>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={110} height={30} />
        </Link>
        <button
          onClick={() => {
            close();
          }}
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H20M2 8H20M2 14H20"
              stroke="#3B99E0"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={"flex flex-col"}>
        {navigation.data.navigations.map((nav) => {
          return (
            <MobileNavigationElement key={nav.id} data={nav} close={close} />
          );
        })}
      </div>
    </div>
  );
};

const MobileNavigationElement = ({
  data,
  close,
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
  close: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  if (data.path) {
    return (
      <Link
        href={data.path}
        onClick={() => {
          close();
        }}
        className={
          "text-primary font-medium py-3 px-5 border-b border-gray-200"
        }
      >
        {data.label}
      </Link>
    );
  } else {
    return (
      <div className={""}>
        <div
          onClick={() => setOpen(!open)}
          className={
            "flex justify-between items-center cursor-pointer py-3 px-5 border-b border-gray-200"
          }
        >
          <p className={"text-primary font-medium"}>{data.label}</p>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${open ? "" : "rotate-180"}`}
          >
            <path
              d="M1 7L7 1L13 7"
              stroke="#3B99E0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {open && (
          <div className={"flex flex-col"}>
            {data.subs.map((sub) => {
              return (
                <MobileNavigationSubElement
                  key={sub.id}
                  data={sub}
                  close={close}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

const MobileNavigationSubElement = ({
  data,
  close,
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
  close: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  if (data.path) {
    return (
      <Link
        href={data.path}
        onClick={() => {
          close();
        }}
        className={
          "text-primary font-medium py-3 px-10 border-b border-gray-200"
        }
      >
        {data.label}
      </Link>
    );
  } else {
    return (
      <div className={""}>
        <div
          onClick={() => setOpen(!open)}
          className={
            "flex justify-between items-center cursor-pointer py-3 px-10 border-b border-gray-200"
          }
        >
          <p className={"text-primary font-medium"}>{data.label}</p>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${open ? "" : "rotate-180"}`}
          >
            <path
              d="M1 7L7 1L13 7"
              stroke="#3B99E0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {open && (
          <div className={"flex flex-col"}>
            {data.subs.map((sub) => (
              <Link
                href={sub.path as string}
                className={
                  "text-primary font-medium py-3 px-14 border-b border-gray-200"
                }
                key={sub.id}
                onClick={() => {
                  close();
                }}
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
