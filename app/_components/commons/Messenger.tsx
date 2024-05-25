import { ReactNode } from "react";

interface MessangerProps {
  icon: ReactNode;
  info: string;
  link: string;
  blank?: boolean;
}
const Messenger = ({ icon, info, link, blank = true }: MessangerProps) => {
  return (
    <li className="min-w-0">
      <a
        href={link}
        target={blank ? "_blank" : "_self"}
        className="flex items-center gap-4 font-futura"
      >
        <div className="">{icon}</div>
        <p className="">{info}</p>
      </a>
    </li>
  );
};

export default Messenger;
