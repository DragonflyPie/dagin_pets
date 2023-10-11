"use client";

import Link from "next/link";
import { FailureIcon, SuccessIcon } from "../commons/icons";
import Button from "../commons/Button";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

interface PopupProps {
  success: boolean;
  dictionary: {
    success_title: string;
    success_description: string;
    fail_title: string;
    fail_description: string;
  };
}

const Popup = ({ success, dictionary }: PopupProps) => {
  const router = useRouter();
  const path = useParams();
  const locale = path.lang;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/${locale}`, { scroll: false });
    }, 5000);

    return () => clearTimeout(timer);
  }, [router, locale]);

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center ">
      <div className=" flex w-[95vw] flex-col items-center rounded-xl bg-white p-6 font-lato shadow-2xl md:mb-[20vh] md:w-[400px]">
        <div className="mb-5 h-12 w-12">
          {success ? <SuccessIcon /> : <FailureIcon />}
        </div>
        <h5 className="pb-2 text-center font-medium">
          {success ? dictionary.success_title : dictionary.fail_title}
        </h5>
        <p className="pb-8 text-center text-gray-form">
          {success
            ? dictionary.success_description
            : dictionary.fail_description}
        </p>
        <Link href={`/${locale}`} className="flex w-full" scroll={false}>
          <Button
            width="full"
            size="small"
            text={success ? "Спасибо!" : "Закрыть"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Popup;
