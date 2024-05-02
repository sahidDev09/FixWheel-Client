import Navbar from "../shared/Navbar";
import About from "./About";
import HeroSlider from "./HeroSlider";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar> 
      <HeroSlider></HeroSlider>
      <About></About>  
    </div>
  );
};

export default Home;
