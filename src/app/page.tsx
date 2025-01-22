import Hero from "./components/Hero";
import Createthebest from "./components/Createthebest";
import Footer from "./components/Footer";
import Foodcategory from "./components/Foodcategory";
import Clients from "./components/Clients";
import Meetourchefs from "./components/Meetourchefs";
import Stillyouneed from "./components/Stillyouneed";
import Extraordinary from "./components/Extraordinary";
import BlogPost from "./components/BlogPost";
import Wedocument from "./components/Wedocument";
import Testimonials from "./components/Testimonials";
import Chooseandpick from "./components/Chooseandpick";





export default function Home() {
  return (
    <div>
      <Hero />
      <Createthebest />
      <Foodcategory />
      <Extraordinary />
      <Clients />
      <Chooseandpick />
      <Meetourchefs />
      <Testimonials />
      <Wedocument />
      <BlogPost />
      <Stillyouneed />
      <Footer />
    </div>
  );
}
