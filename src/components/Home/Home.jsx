import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import About from "./About";
import Customer from "./Customer";
import HeroSlider from "./HeroSlider";
import Servics from "./Services/Servics";

const Home = () => {
  return (
    <div>
      <div className=" container mx-auto">
        <Navbar></Navbar>
        <HeroSlider></HeroSlider>
        <About></About>
        <Servics></Servics>
        <Customer></Customer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
