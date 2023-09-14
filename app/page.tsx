import About from "./About";
import ContactModal from "./ContactModal";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Questions from "./Questions";
import Safety from "./Safety";
import Services from "./Services";
import Welcome from "./Welcome";
import Image from "next/image";
import KOT from "../public/KOT2.jpg";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center font-osans">
      {/* <Navbar /> */}
      <div className=" absolute  right-0 top-0 z-10 h-screen w-screen">
        <Image src={KOT} alt={""} className="h-screen w-screen" />
      </div>
      <div className="flex max-w-[1440px] flex-col px-20">
        <Welcome />
        {/* <ContactModal /> */}
        <About />
        <Services />
        <Safety />
        <Questions />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
