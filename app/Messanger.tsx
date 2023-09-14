import { ReactNode } from "react";

interface MessangerProps {
  icon: ReactNode;
  info: string;
  link: string;
  blank?: boolean;
}
const Messanger = ({ icon, info, link, blank = true }: MessangerProps) => {
  return (
    <li>
      <a
        href={link}
        target={blank ? "_blank" : "_self"}
        className="flex w-fit items-center gap-2  lg:gap-4"
      >
        <div className="">{icon}</div>
        <div className="">{info}</div>
      </a>
    </li>
  );
};

export default Messanger;
