import { ReactNode } from "react";

interface MessangerProps {
  icon: ReactNode;
  info: string;
  link: string;
  blank?: boolean;
}
const Messenger = ({ icon, info, link, blank = true }: MessangerProps) => {
  return (
    <li className="w-min">
      <a
        href={link}
        target={blank ? "_blank" : "_self"}
        className="flex w-min items-center gap-2 text-base font-light md:text-xl lg:gap-4  xl:text-2xl"
      >
        <div className="">{icon}</div>
        <p className="">{info}</p>
      </a>
    </li>
  );
};

export default Messenger;
