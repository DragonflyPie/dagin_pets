import About from "./About";
import Footer from "./Footer";
import Safety from "./Safety";
import Services from "./Services";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <main className="font-osans w-full flex items-center flex-col">
      <Welcome />
      <About />
      <Services />
      <Safety />
      <Footer />
    </main>
  );
}
