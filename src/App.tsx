import "./App.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Industries from "./components/Industries";
import LiveRates from "./components/LiveRates";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Industries />
      <HowItWorks />
      <LiveRates />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
