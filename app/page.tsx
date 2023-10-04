import About from "./About";
import Questions from "./Questions";
import Reviews from "./Reviews";
import Safety from "./Safety";
import Services from "./Services";
import Popup from "./Popup";
import Welcome from "./Welcome";
import ContactModal from "./ContactModal";
import line from "../public/line.png";
import Image from "next/image";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const success = searchParams.success;
  const modal = searchParams.modal;
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex  max-w-[1440px] flex-col ">
        <Welcome />
        <About />
        <Services />
        <Safety />
        <Reviews />
        <Questions />
        {modal === "true" && <ContactModal />}
        {success === "true" ? (
          <Popup success />
        ) : success === "false" ? (
          <Popup success={false} />
        ) : null}
      </div>
    </main>
  );
}
