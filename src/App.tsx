import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-5 lg:px-20 xl:px-30">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
