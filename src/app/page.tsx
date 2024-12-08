import Image from "next/image";
import Hero from "./components/Hero";
import Createthebest from "./components/Createthebest";
import Footer from "./components/Footer";
import Foodcategory from "./components/Foodcategory";
import Clients from "./components/Clients";
import Meetourchefs from "./components/Meetourchefs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Createthebest />
      <Foodcategory />
      <Clients />
      <Meetourchefs />
      <Footer />
    </div>
  );
}
