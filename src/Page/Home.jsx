import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/Hero/Hero";
import SectionKnowUs from "../Components/SectionKnowUs/SectionKnowUs";
import Footer from "../Components/Footer/Footer";
import Cards from "../Components/Cards/Cards";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cards />
      <SectionKnowUs />
      <Footer />
    </div>
  );
};

export default Home;
