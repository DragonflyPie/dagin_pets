import Image from "next/image";
import { Download } from "../commons/icons";

interface QualificationsProps {
  dictionary: {
    title: string;
  };
}
const Qualifications = ({ dictionary }: QualificationsProps) => {
  return (
    <div
      className="flex w-full scroll-m-[70px] flex-col items-center gap-9 px-4 pb-14 md:scroll-m-[100px] lg:px-16 xl:scroll-m-[150px] xl:px-20 xl:pb-24"
      id="qualifications"
    >
      <h2 className="text-center font-geometria text-3xl font-medium md:text-4xl/[2.375rem] md:text-4xl/[2.75rem]">
        {dictionary.title}
      </h2>
      <div className="relative aspect-[1.41] w-full rounded-xl border lg:w-3/4">
        <Image
          src={"/images/iata.png"}
          alt={""}
          fill
          className="rounded-xl"
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </div>
      <a href="/files/IATA.pdf" download="iata">
        <div className="flex gap-2 rounded rounded-xl bg-honeycomb-default px-6 py-3 text-white transition-colors hover:bg-honeycomb-dark">
          <span>PDF</span>
          <Download />
        </div>
      </a>
    </div>
  );
};

export default Qualifications;
