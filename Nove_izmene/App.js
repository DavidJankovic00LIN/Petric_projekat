import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ImageSlider from "./components/ImageSlider";
import ServicesSection from "./components/ServicesSection";
import Projekti from "./components/Projekti";
import Reference from "./components/Reference";
import Proizvodi from "./components/Proizvodi";
import ONama from "./components/ONama";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import logo from "./assets/logo.png";

import logo_name from "./assets/logo_name.png";
import Slika1 from "./assets/slike/Slika1.jpg";
import Slika2 from "./assets/slike/Slika2.jpg";
import Slika3 from "./assets/slike/Slika3.jpg";
import Slika4 from "./assets/slike/Slika4.png";
import Slika5 from "./assets/slike/Slika5.jpg";
import Slika6 from "./assets/slike/Slika6.jpg";
import Slika7 from "./assets/slike/Slika7.jpg";
import Slika8 from "./assets/slike/Slika8.jpg";
import Slika9 from "./assets/slike/Slika9.jpg";
import Slika10 from "./assets/slike/Slika10.jpg";
import Slika11 from "./assets/slike/Slika11.jpg";
import Slika12 from "./assets/slike/Slika12.jpg";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const slike = [
    Slika1,
    Slika2,
    Slika3,
    Slika4,
    Slika5,
    Slika6,
    Slika7,
    Slika8,
    Slika9,
    Slika10,
    Slika11,
    Slika12,
  ];


  

  useEffect(() => {
    
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* HEADER */}
        <header className="bg-white shadow w-full fixed top-0 left-0 z-50">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center gap-2">
              <a href="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-14 w-auto object-contain transition duration-300 ease-in-out hover:filter hover:invert"
                />
              </a>
              <img
                src={logo_name}
                alt="LogoName"
                className="h-10 w-auto object-contain"
              />
            </div>

            <Navbar
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              setIsLoginOpen={setIsLoginOpen}
              setIsRegisterOpen={setIsRegisterOpen}
              className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium"
            >
              <button className="ml-4 px-4 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] hover:opacity-90 transition">
                Prijava
              </button>
              <button className="px-4 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] hover:opacity-90 transition">
                Registracija
              </button>

              <Link
                to="/projekti"
                className="hover:text-primary relative group transition duration-300"
              >
                Projekti
                <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              <Link
                to="/reference"
                className="hover:text-primary relative group transition duration-300"
              >
                Reference
                <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              <Link
                to="/proizvodi"
                className="hover:text-primary relative group transition duration-300"
              >
                Proizvodi
                <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              <Link
                to="/o-nama"
                className="hover:text-primary relative group transition duration-300"
              >
                O nama
                <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              <Link
                to="/kontakt"
                className="hover:text-primary relative group transition duration-300"
              >
                Kontakt
                <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </Navbar>
            <LoginModal
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
              setCurrentUser={setCurrentUser}
              setIsRegisterOpen={setIsRegisterOpen}
            />
            <RegisterModal
              isOpen={isRegisterOpen}
              onClose={() => setIsRegisterOpen(false)}
            />
          </div>
        </header>

        {/* SPACER (Izmedju gornje ivice slika i donje ivice nav-bara) */}
        <div className="pt-[73.8px]" />
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex flex-col items-center justify-center">
                <ImageSlider images={slike} />
                <section className="bg-gray-100 py-20 px-4 text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Inženjering nove generacije
                  </h1>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    MiN Elektro donosi snagu tehnologije u vašu industriju – od
                    elektroinstalacija do pametnog tretmana voda.Naša misija je da inovacije pretvorimo u konkretna rešenja koja unapređuju efikasnost i sigurnost 
                    vašeg poslovanja.
                  </p>


                  <p className="text-lg text-gray-700 max-w-3xl mx-auto ">Kroz stručne usluge projektovanja, inženjeringa i prodaje opreme, gradimo pouzdana i
                   održiva rešenja prilagođena vašim potrebama. Od ideje do realizacije – MiN Elektro je vaš partner na svakom koraku.</p>

                  <p  className="text-lg text-gray-700 max-w-3xl mx-auto">Naš tim inženjera koristi savremene alate i metodologije kako bi 
                    obezbijedio precizno planiranje i kvalitetnu implementaciju.
                    Bilo da razvijate novo postrojenje ili modernizujete postojeći sistem, MiN Elektro nudi rešenja po meri.
                  </p>

                  <p className="text-lg text-gray-700 max-w-3xl mx-auto " >
                  Fokusirani smo na energetsku efikasnost, automatizaciju i održivost – vriednosti koje definišu inženjering budućnosti.
                  Kroz saradnju s vodećim brendovima i stalno usavršavanje, garantujemo visoke standarde kvaliteta.
                  </p>  









                </section>
                <ServicesSection />
                
              </main>
            }
          />
          <Route path="/projekti" element={<Projekti />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/proizvodi" element={<Proizvodi />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/uslovi-koriscenja" element={<Terms />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
      <ScrollProgress />
    </Router>
  );
}

export default App;



function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(100 - scrolled);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-14 h-14 group">
        {/* Progress circle */}
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100, 100"
            style={{ strokeDashoffset: progress }}
          />
          <defs>
            <linearGradient
              id="progress-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#000000" /> {/* CRNA */}
              <stop offset="100%" stopColor="#002366" /> {/* TAMNO PLAVA */}
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow button */}
        <button
          onClick={scrollToTop}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center
                 border border-cyan-400/30 hover:border-cyan-400/60 transition-all
                 shadow-[0_0_10px_#00f7ff33] hover:shadow-[0_0_15px_#00f7ff66]"
          aria-label="Back to top"
        >
          <svg
            className="h-5 w-5 text-cyan-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 6V18M12 6L7 11M12 6L17 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
