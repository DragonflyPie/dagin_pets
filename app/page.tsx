import About from "./About";
import Footer from "./Footer";
import Safety from "./Safety";
import Services from "./Services";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center font-osans">
      <Welcome />
      <About />
      <Services />
      <Safety />

      <Footer />
    </main>
  );
}
