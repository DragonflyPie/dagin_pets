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
import Qualifications from "../_components/qualification/Qualification";

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
        <Welcome dictionary={dictionary.header} />
        <About dictionary={dictionary.about} />
        <Services dictionary={dictionary.services} />
        <Safety dictionary={dictionary.safety} />
        <Reviews dictionary={dictionary.reviews} />
        <Qualifications dictionary={dictionary.qualifications} />
        <Questions
          dictionary={dictionary.faq}
          button_label={dictionary.common.contact_button}
        />
        {modal === "true" && <ContactModal dictionary={dictionary.modal} />}
        {success === "true" ? (
          <Popup success dictionary={dictionary.popup} />
        ) : success === "false" ? (
          <Popup success={false} dictionary={dictionary.popup} />
        ) : null}
      </div>
    </main>
  );
}
