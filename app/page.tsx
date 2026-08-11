import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Trending from "./components/Trending";
import Collections from "./components/Collections";
import LatestTools from "./components/LatestTools";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <Categories />
      <Collections />
      <LatestTools />
      <Stats />
      <Testimonials />
      <WhyChoose />
      <Footer />
      </>
  );
} 
      