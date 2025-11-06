import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <InnerApp />
    </Router>
  );
}

function InnerApp() {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
