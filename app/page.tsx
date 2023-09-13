import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Questions from "./Questions";
import Safety from "./Safety";
import Services from "./Services";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center font-osans">
      <Navbar />
      <div className="flex max-w-[1440px] flex-col px-20">
        <Welcome />
        <About />
        <Services />
        <Safety />
        <Questions />
      </div>
      <Footer />
    </main>
  );
}
