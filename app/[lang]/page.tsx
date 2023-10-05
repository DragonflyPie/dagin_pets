import { Locale } from "@/i18n.config";
import About from "../_components/about/About";
import ContactModal from "../_components/contactModal/ContactModal";
import Questions from "../_components/faq/Questions";
import Popup from "../_components/popup/Popup";
import Reviews from "../_components/reviews/Reviews";
import Safety from "../_components/safety/Safety";
import Services from "../_components/services/Services";
import Welcome from "../_components/welcome/Welcome";
import { getDictionary } from "../_utilities/getDictionary";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { lang: Locale };
}

export default async function Home({
  searchParams,
  params: { lang },
}: PageProps) {
  const dictionary = await getDictionary(lang);
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
