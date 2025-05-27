import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
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
import logo_trans from "./assets/logo_trans.png";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const sliderRef = useRef(null);
  const scrollInterval = useRef(null);
  const autoScrollInterval = useRef(null);

  // AUTOMATSKI SCROLL
  const autoScroll = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 0.5;
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const halfScrollWidth = scrollWidth / 2;
      if (scrollLeft >= halfScrollWidth) {
        sliderRef.current.scrollLeft = scrollLeft - halfScrollWidth;
      }
    }
    autoScrollInterval.current = requestAnimationFrame(autoScroll);
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = requestAnimationFrame(autoScroll);
  };

  const stopAutoScroll = () => {
    cancelAnimationFrame(autoScrollInterval.current);
  };

  // HOVER SCROLL
  const startScroll = (direction) => {
    stopAutoScroll(); // zaustavi auto-scroll na hover
    const scrollAmount = direction === "left" ? -2 : 2;
    scrollInterval.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += scrollAmount;
        const { scrollLeft, scrollWidth } = sliderRef.current;
        const halfScrollWidth = scrollWidth / 2;

        if (direction === "right" && scrollLeft >= halfScrollWidth) {
          sliderRef.current.scrollLeft = scrollLeft - halfScrollWidth;
        }
        if (direction === "left" && scrollLeft <= 0) {
          sliderRef.current.scrollLeft = halfScrollWidth;
        }
      }
    }, 10);
  };

  const stopScroll = () => {
    clearInterval(scrollInterval.current);
    startAutoScroll(); // nastavi auto-scroll kada korisnik skloni miš
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
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
            <a
              href="#"
              className="hover:text-primary relative group transition duration-300"
            >
              Projekti
              <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a
              href="#"
              className="hover:text-primary relative group transition duration-300"
            >
              Proizvodi
              <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a
              href="#"
              className="hover:text-primary relative group transition duration-300"
            >
              O nama
              <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a
              href="#"
              className="hover:text-primary relative group transition duration-300"
            >
              Kontakt
              <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </Navbar>
          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
          />
          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
          />
        </div>
      </header>

      {/* SPACER (Izmedju gornje ivice slika i donje ivice nav-bara) */}
      <div className="pt-[73.8px]" />

      {/* MAIN */}
      <main className="flex flex-col items-center justify-center">
      
        <section className="bg-gray-100 py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gotovi projekti
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nisam siguran sta tacno treba da ide na ovu strancu,ali sam prema crtezu skontao da oces da ovde idu te kartice se referencama,i progres bar kako budes isao na dole da se on puni i kad kliknes on te skrola na gore,tako da cu samo duplirati flip kartice zarad primera,i dodati taj progres bar,pa cemo videti kako dalje treba.
          (strelica se pojavi kad malo skrolnes dole)</p>
        </section>

        <section className="py-16 w-full bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Naslov */}
            <h2 className="text-3xl font-bold text-center mb-12 text-black-800">
              Gotovi projekti
            </h2>

            {/* Kartice red br 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Jedna kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Prednja strana */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Industrijska oprema"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Zadnja strana */}
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Rešenja za industrijsku opremu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Druga kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Otpadne vode"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Sistemi za prečišćavanje voda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Treća kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Električne instalacije"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Niskonaponske i visokonaponske instalacije.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            
            <br></br>
             {/* Kartice red br 2 */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Jedna kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Prednja strana */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Industrijska oprema"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Zadnja strana */}
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Rešenja za industrijsku opremu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Druga kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Otpadne vode"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Sistemi za prečišćavanje voda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Treća kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Električne instalacije"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Niskonaponske i visokonaponske instalacije.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <br></br>
             {/* Kartice red br 3 */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Jedna kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Prednja strana */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Industrijska oprema"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Zadnja strana */}
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Rešenja za industrijsku opremu.
                    </p>
                  </div>
                </div>
              </div>

              
              {/* Druga kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Otpadne vode"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Sistemi za prečišćavanje voda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Treća kartica */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
                      alt="Električne instalacije"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full bg-primary text-white rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
                    <p className="text-xl italic font-serif">
                      Niskonaponske i visokonaponske instalacije.
                    </p>
                  </div>
                </div>
              </div>
            </div>



            {/* progress bar */}
            <ScrollProgress />
         

          </div>
        </section>


        <section className="w-full bg-gray-800 text-white">
  <footer className="container mx-auto py-12 px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo i opis kompanije */}
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <img src={logo_trans} alt="LogoName" className="h-8 w-auto" />
        </div>
        <p className="text-gray-400 mb-4">
          Vaš pouzdan partner u izgradnji kvalitetnih digitalnih rešenja.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
      </div>

      {/* Brzi linkovi */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Brzi linkovi</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition">Početna</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">O nama</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Usluge</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Projekti</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Kontakt</a></li>
        </ul>
      </div>

      {/* Kontakt informacije */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Kontaktirajte nas</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Miljakovačko brdo 41a, Beograd</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+381 63 808 6144</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>primer@gmail.com</span>
          </li>
        </ul>
      </div>

  
    </div>

    {/* Donji deo footera */}
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Vaša Kompanija. Sva prava zadržana.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Uslovi korišćenja</a>
          <a href="#" className="hover:text-white transition">Politika privatnosti</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</section>


      </main>
    </div>
  );
}

export default App;

function Navbar({ setIsLoginOpen, setIsRegisterOpen }) {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="hidden md:flex w-full justify-between items-center px-4 text-sm font-medium text-gray-700">
      {/* Navigacioni linkovi levo */}
      <div className="flex space-x-6">
        <a
          href="#"
          onClick={() => setActiveLink("projects")}
          className={`relative group transition duration-300 ${
            activeLink === "projects" ? "text-primary" : "hover:text-primary"
          }`}
        >
          Projekti
          <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>

        <a
          href="#"
          onClick={() => setActiveLink("products")}
          className={`relative group transition duration-300 ${
            activeLink === "products" ? "text-primary" : "hover:text-primary"
          }`}
        >
          Proizvodi
          <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>

        <a
          href="#"
          onClick={() => setActiveLink("about")}
          className={`relative group transition duration-300 ${
            activeLink === "about" ? "text-primary" : "hover:text-primary"
          }`}
        >
          O nama
          <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>

        <a
          href="#"
          onClick={() => setActiveLink("contact")}
          className={`relative group transition duration-300 ${
            activeLink === "contact" ? "text-primary" : "hover:text-primary"
          }`}
        >
          Kontakt
          <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
      </div>

      {/* Dugmad desno */}
      <div className="flex space-x-4">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="relative overflow-hidden px-6 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] group transition-all duration-300 hover:brightness-110"
        >
          <span className="relative z-10">Prijava</span>
          <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
        </button>

        <button
          onClick={() => setIsRegisterOpen(true)}
          className="relative overflow-hidden px-6 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] group transition-all duration-300 hover:brightness-110"
        >
          <span className="relative z-10">Registracija</span>
          <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
        </button>
      </div>
    </nav>
  );
}

function LoginModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else if (visible) {
      setClosing(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen && !closing ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 w-full max-w-sm relative animate-slideIn">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Prijava</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-[#002366]"
          />
          <input
            type="password"
            placeholder="Lozinka"
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-[#002366]"
          />
          <button
            type="submit"
            className="relative overflow-hidden px-6 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] group transition-all duration-300 hover:brightness-110"
          >
            <span className="relative z-10">Prijavi se</span>
            <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

{/**Progressbar funkcija */}
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(100 - scrolled);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
           <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
          <svg className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none">
            <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}


function RegisterModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    email: "",
    lozinka: "",
    potvrdaLozinke: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else if (visible) {
      setClosing(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ime, prezime, email, lozinka, potvrdaLozinke } = formData;
    if (!ime || !prezime || !email || !lozinka || !potvrdaLozinke) {
      setError("Sva polja su obavezna.");
      return;
    }
    if (lozinka !== potvrdaLozinke) {
      setError("Lozinke se ne poklapaju.");
      return;
    }
    setError("");
    alert("Uspešno ste se registrovali!");
    onClose();
  };

  if (!isOpen && !visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen && !closing ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 w-full max-w-sm relative animate-slideIn">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Registracija</h2>
        {error && (
          <div className="text-red-500 text-sm mb-2 text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="ime"
            placeholder="Ime"
            value={formData.ime}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-[#002366]"
          />
          <input
            type="text"
            name="prezime"
            placeholder="Prezime"
            value={formData.prezime}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-[#002366]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-[#002366]"
          />
          <input
            type="password"
            name="lozinka"
            placeholder="Lozinka"
            value={formData.lozinka}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-[#002366]"
          />
          <input
            type="password"
            name="potvrdaLozinke"
            placeholder="Potvrdi lozinku"
            value={formData.potvrdaLozinke}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-[#002366]"
          />
          <button
            type="submit"
            className="relative overflow-hidden px-6 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] group transition-all duration-300 hover:brightness-110"
          >
            <span className="relative z-10">Registruj se</span>
            <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

