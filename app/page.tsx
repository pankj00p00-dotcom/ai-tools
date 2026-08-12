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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Tools",
    url: "https://ai-tools-three-rho.vercel.app/",
    description:
      "Discover the best AI tools for writing, images, video, coding, SEO, marketing and productivity.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Tools",
    url: "https://ai-tools-three-rho.vercel.app/",
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main>
        <Hero />

        <Trending />

        <Categories />

        <Collections />

        <LatestTools />

        <Stats />

        <WhyChoose />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}