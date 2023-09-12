import { ReactNode } from "react";

interface ContactProps {
  icon: ReactNode;
  info: string;
  link: string;
}
const Contact = ({ icon, info, link }: ContactProps) => {
  return (
    <a href={link} className="flex w-fit items-center gap-2  lg:gap-4">
      <div className="">{icon}</div>
      <div className="">{info}</div>
    </a>
  );
};

export default Contact;
