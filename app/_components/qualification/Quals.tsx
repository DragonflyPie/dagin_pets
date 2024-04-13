"use client";

import Image from "next/image";
import { Download } from "../commons/icons";
import { useState } from "react";

interface QualificationsProps {
  dictionary: {
    title: string;
  };
}
const Qualifications = ({ dictionary }: QualificationsProps) => {
  const [left, setLeft] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 35;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setLeft(false);
    }
    if (isRightSwipe) {
      setLeft(true);
    }
  };

  return (
    <div
      className="flex w-full scroll-m-[70px] flex-col items-center overflow-x-clip px-4 pb-14 md:scroll-m-[100px] lg:px-16 xl:scroll-m-[150px] xl:px-20 xl:pb-24"
      id="qualifications"
    >
      <h2 className="pb-6  font-geometria text-2xl font-medium md:pb-10 md:text-[2.625rem]/[2.5rem]">
        {dictionary.title}
      </h2>
      <div
        className="overflow-x-clipc relative aspect-[1.41] w-full md:w-3/4 xl:w-[70%]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          onClick={() => setLeft(true)}
          className={`absolute h-full w-full cursor-pointer transition-all duration-500
       ${left ? "translate-x-0" : "-translate-x-[100%] scale-90"} 
        `}
        >
          <Image
            src={"/images/iata.png"}
            alt={""}
            fill
            className="rounded-xl border"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>

        <div
          onClick={() => setLeft(false)}
          className={`absolute h-full w-full cursor-pointer transition-all duration-500
       ${left ? "translate-x-[100%] scale-90 " : "translate-x-0"} 
        `}
        >
          <Image
            src={"/images/ipata.png"}
            alt={""}
            fill
            className="rounded-xl border"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </div>
      <div className="flex gap-3 pb-6 pt-2">
        <button onClick={() => setLeft(true)} className="px-1 py-6">
          <div
            className={`h-1 w-12 rounded-sm transition-all
        ${left ? "bg-honeycomb-default" : "bg-gray-light"}
        `}
          />
        </button>
        <button onClick={() => setLeft(false)} className="px-1 py-6">
          <div
            className={`h-1 w-12 rounded-sm transition-all
        ${left ? "bg-gray-light" : "bg-honeycomb-default"}
        `}
          />
        </button>
      </div>
      <a
        href={left ? "/files/IATA.pdf" : "/files/IPATA.pdf"}
        download={left ? "iata" : "ipata"}
      >
        <div className="flex gap-2 rounded rounded-xl bg-honeycomb-default px-6 py-3 text-white transition-colors hover:bg-honeycomb-dark">
          <span>PDF</span>
          <Download />
        </div>
      </a>
    </div>
  );
};

export default Qualifications;

const Quals = () => {
  const [kek, setKek] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative aspect-video w-[70vw]">
        <div
          className={`absolute h-full w-full bg-red-200 transition-all duration-500
       ${kek ? "-translate-x-[100%] scale-90" : "translate-x-0 "} 
        `}
        ></div>
        <div
          className={`absolute h-full w-full bg-red-200 transition-all duration-500
       ${kek ? "translate-x-0" : "translate-x-[100%] scale-90 "} 
        `}
        ></div>
      </div>
      <button onClick={() => setKek(!kek)}>CLICK</button>
    </div>
  );
};
