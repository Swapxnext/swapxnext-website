import "../App.css";
import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Industries from "../components/Industries";
import LiveRates from "../components/LiveRates";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <div>
      <HeroSection />
      <Industries />
      <HowItWorks />
      <LiveRates />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <GetStarted />
    </div>
  );
}

export default Home;
