import About from "./_components/about/About";
import Questions from "./_components/faq/Questions";
import Safety from "./_components/safety/Safety";
import Popup from "./_components/popup/Popup";
import Welcome from "./_components/welcome/Welcome";
import ContactModal from "./_components/contactModal/ContactModal";
import Services from "./_components/services/Services";
import Reviews from "./_components/reviews/Reviews";

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
