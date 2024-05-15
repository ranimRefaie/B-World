import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import SectionKnowUs from "../Components/SectionKnowUs/SectionKnowUs";
import Footer from "../Components/Footer/Footer";
import Cards from "../Components/Cards/Cards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <SectionKnowUs />
      <Footer />
    </div>
  );
};

export default Home;
