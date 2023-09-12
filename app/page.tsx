import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Safety from "./Safety";
import Services from "./Services";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center font-osans">
      <div className="flex max-w-[1440px] flex-col px-20">
        <Navbar />
        <Welcome />
        <About />
        <Services />
        <Safety />
      </div>
      <Footer />
    </main>
  );
}
