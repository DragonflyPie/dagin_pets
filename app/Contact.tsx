import { ReactNode } from "react";

interface ContactProps {
  icon: ReactNode;
  info: string;
}
const Contact = ({ icon, info }: ContactProps) => {
  return (
    <div className="flex flex-col items-center gap-2  md:gap-4">
      <div className="">{icon}</div>
      <div className="">{info}</div>
    </div>
  );
};

export default Contact;
