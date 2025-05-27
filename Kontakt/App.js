import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "./assets/logo.png";
import logo_name from "./assets/logo_name.png";
import logo_trans from "./assets/logo_trans.png";

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
    Za sve dodatne informacije budite slobodni da nas kontaktirate putem kontakt forme ili putem nekih od naših društvenih mreža
  </p>
</section>

{/* Sekcija sa kontakt informacijama i mapom */}
<section className="py-16 w-full bg-gray-200">
{/*Kontakt sekcija */ }
<div class="container mx-auto px-4 py-12">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
    {/*Forma 1/3 - osnovne informacije*/}
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6">Naši podaci</h2>
      
      <div class="space-y-6">
    
        <div class="flex items-start">
          <div class="bg-blue-100 p-3 rounded-full mr-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-800">Adresa</h3>
            <p class="text-gray-600">Miljakovačko brdo 41a</p>
          </div>
        </div>

      
        <div class="flex items-start">
          <div class="bg-blue-100 p-3 rounded-full mr-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-800">Telefon</h3>
            <p class="text-gray-600">+381 638086144</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="bg-blue-100 p-3 rounded-full mr-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-800">Email</h3>
            <p class="text-gray-600">primer@gmail.com</p>
          </div>
        </div>

        <div class="mt-8">
          <h3 class="font-medium text-gray-800">Matični broj: <span class="text-gray-600">22021591</span></h3>
          <h3 class="font-medium text-gray-800 mt-2">PIB: <span class="text-gray-600">114422858</span></h3>
        </div>
      </div>
    </div>


    <div class="lg:col-span-2 space-y-8">
      

    <div class="bg-white p-8 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-6">Kontaktirajte nas</h2>
  <form class="space-y-6">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Ime</label>
      <input
        type="text"
        name="name"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        placeholder="Vaše ime"
        required
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        type="email"
        name="email"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        placeholder="Vaš email"
        required
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Poruka</label>
      <textarea
        name="message"
        rows="5"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        placeholder="Vaša poruka..."
        required
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 shadow-md"
    >
      Pošalji poruku
    </button>
  </form>
</div>
      

      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Lokacija</h2>
        <div class="aspect-w-16 aspect-h-9 w-full">
          <iframe 
            class="w-full h-96 rounded-lg border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3085999999997!2d20.44683303562437!3d44.73857908156135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71835ace020d%3A0xe93f4ba73d93126e!2zTWlsamFrb3ZhxI1rbyBicmRvIDQxYSwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1748201487368!5m2!1ssr!2srs">
          </iframe>
        </div>
      </div>
      
    </div>
  </div>
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