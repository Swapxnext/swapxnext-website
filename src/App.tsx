import "./App.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
