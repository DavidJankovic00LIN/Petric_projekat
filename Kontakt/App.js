import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "./assets/logo.png";
import logo_name from "./assets/logo_name.png";

function App() {
  // Stanja za modale
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER - Fiksiran header sa logom i navigacijom */}
      <header className="bg-white shadow w-full fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
          {/* Logo i naziv kompanije */}
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

          {/* Glavna navigacija - prikazuje se samo na desktopu (hidden md:flex) */}
          <Navbar
            setIsLoginOpen={setIsLoginOpen}
            setIsRegisterOpen={setIsRegisterOpen}
            className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium"
          />

          {/* Modali za prijavu i registraciju */}
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

      {/* SPACER - Kompenzacija za fiksirani header da sadržaj ne bi bio iza njega */}
      <div className="pt-[73.8px]" />

      {/* MAIN - Glavni sadržaj stranice */}
      <main className="flex flex-col items-center justify-center">
        {/* Hero sekcija */}
        <section className="bg-gray-100 py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
           Kontakt
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
           Za sve dodatne informacije budite slobodni da nas kontaktirate putem kontakt forme ili puten nekih od nasih drugi mreza
          </p>
        </section>

    
              {/*Sekcija sa mrezama*/}
        <section className="py-16 w-full bg-grey-200">
            <div className="flex flex-col lg:flex-row gap-8 p-2">
                {/*Kontakt ifnormacije */}
                <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nasi podaci</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6 text-blue-600" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Adresa</h3>
                                <p className="text-gray-600">Miljakovačko brdo 41a</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6 text-blue-600" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Telefon</h3>
                                <p className="text-gray-600">+381 638086144</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6 text-blue-600" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                <p className="text-gray-600">primer@gmail.com</p>
                            </div>
                        </div>


                          <div class="mt-8">
                            <h3 class="font-medium text-gray-800 ">Matični broj : <span class="space-y-2 text-gray-600">22021591</span> </h3> 
                            
                             
                               
                         
                            <br/>
                            <h3 class="font-medium text-gray-800 mb-4">PIB : <span class="space-y-2 text-gray-600">114422858</span></h3>
                            <ul class="space-y-2 text-gray-600">
                            
                                
                               
                            </ul>
                          
                          
                          </div>


                    </div>
                    
                </div>
                {/*Foktakt forma 2/3 */}
            <div class="lg:w-2/3 bg-white rounded-lg-shadow-md p-9">
              <h2 class="text-2xl font-semibold text-gray-800 mb-">Kako do nas?</h2>
              
   
  
              <div class="mapouter">
          </div>
        
          <iframe
  width="600"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3085999999997!2d20.44683303562437!3d44.73857908156135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71835ace020d%3A0xe93f4ba73d93126e!2zTWlsamFrb3ZhxI1rbyBicmRvIDQxYSwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1748201487368!5m2!1ssr!2srs&style=feature:poi|visibility:off"
/>
            
            </div>

            

            </div>
        </section>


      </main>
    </div>
  );
}

export default App;

// Komponenta za navigacioni meni
function Navbar({ setIsLoginOpen, setIsRegisterOpen }) {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="hidden md:flex w-full justify-between items-center px-4 text-sm font-medium text-gray-700">
      {/* Linkovi za navigaciju - leva strana */}
      <div className="flex space-x-6">
        <a
          href="#"
          onClick={() => setActiveLink("projects")}
          className={`relative group transition duration-300 ${
            activeLink === "projects" ? "text-primary" : "hover:text-primary"
          }`}
        >
          Projekti
          {/* Animacija ispod linka */}
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

      {/* Dugmad za prijavu i registraciju - desna strana */}
      <div className="flex space-x-4">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="relative overflow-hidden px-6 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] group transition-all duration-300 hover:brightness-110"
        >
          <span className="relative z-10">Prijava</span>
          {/* Animacija za dugme */}
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

// Komponenta za login modal
function LoginModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Upravljanje animacijama za otvaranje/zatvaranje modala
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

// Komponenta za registracioni modal
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

  // Upravljanje animacijama modala
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

  // Upravljanje unosom u formu
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Validacija i slanje forme
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