import About from "./About";
import ContactModal from "./ContactModal";
import Questions from "./Questions";
import Reviews from "./Reviews";
import Safety from "./Safety";
import Services from "./Services";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex max-w-[1440px] flex-col ">
        <Welcome />
        <About />
        <Services />
        <Safety />
        <Reviews />
        <Questions />
      </div>
    </main>
  );
}
