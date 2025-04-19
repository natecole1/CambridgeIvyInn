import Contacts from "./components/ui/Contacts";
import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import RoomsSection from "./components/ui/RoomsSection";
import Testimonials from "./components/ui/Testimonials"


export default function Home() {
  return (
    <div>
      <div className="bg-[url(/assets/InnBackgroundImage.png)] w-full bg-cover bg-center bg-no-repeat bg-fixed">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-[url(/assets/backgroundRoom.png)] w-full bg-cover bg-center bg-no-repeat bg-fixed">
        <RoomsSection />
      </div>
      <div>
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}
