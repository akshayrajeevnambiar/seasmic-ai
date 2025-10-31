import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import TermsOfUsePage from "./pages/TermsOfUsePage.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
