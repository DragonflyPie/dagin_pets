"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const YandexID = process.env.NEXT_PUBLIC_YANDEX_ID;

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    ym(YandexID, "hit", url);
  }, [pathname, searchParams]);

  return null;
}
