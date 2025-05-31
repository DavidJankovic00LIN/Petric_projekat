import React, { useEffect, useState } from "react";
import axios from "axios";
import Kran from "../assets/Kran.png";

function Kontakt() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await axios.post("http://localhost:5058/api/contacts/send", formData); // promeni URL po potrebi
      setStatus("success");
      setFormData({ senderName: "", senderEmail: "", message: "" });
    } catch (error) {
      console.error("Greška prilikom slanja:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-gradient-to-r from-black to-[#002366] py-20 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Za sve dodatne informacije budite slobodni da nas kontaktirate putem
          kontakt forme ili putem neke od naših društvenih mreža
        </p>

        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informacije */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-6">Naši podaci</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Adresa</h3>
                    <p className="text-gray-600">Miljakovačko brdo 41a</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Telefon</h3>
                    <p className="text-gray-600">+381 638086144</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600">primer@gmail.com</p>
                  </div>
                </div>
                </div>
                
                <div className="mt-20 mb-0 py-0 text-center">
                  <h3 className="font-medium">
                    Matični broj:{" "}
                    <span className="text-gray-600">22021591</span>
                  </h3>
                  <h3 className="font-medium mt-2">
                    PIB: <span className="text-gray-600">114422858</span>
                  </h3>
                </div>
              
              <div className="relative w-full mt-8">
                <img
                  src={Kran}
                  alt="kran"
                  className="w-[99%] mx-auto translate-y-16"
                />
              </div>
            </div>

            {/* Forma + Mapa */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Lokacija</h2>
                <iframe
                  className="w-full h-96 rounded-lg border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3085999999997!2d20.44683303562437!3d44.73857908156135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71835ace020d%3A0xe93f4ba73d93126e!2zTWlsamFrb3ZhxI1rbyBicmRvIDQxYSwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1748201487368!5m2!1ssr!2srs"
                ></iframe>
              </div>

              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Kontaktirajte nas</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ime
                    </label>
                    <input
                      type="text"
                      name="senderName"
                      placeholder="Vaše ime"
                      value={formData.senderName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="senderEmail"
                      placeholder="Vaš email"
                      value={formData.senderEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Poruka
                    </label>
                    <textarea
                      name="message"
                      placeholder="Vaša poruka..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`relative overflow-hidden w-full py-2 px-6 rounded text-white 
                bg-gradient-to-r from-black to-[#002366] group 
                transition-all duration-300 hover:brightness-110 
                ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={status === "loading"}
                  >
                    <span className="relative z-10">
                      {status === "loading" ? "Slanje..." : "Pošalji poruku"}
                    </span>
                    <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
                  </button>
                  {status === "success" && (
                    <p className="text-green-600 mt-2">
                      Poruka uspešno poslata!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 mt-2">
                      Došlo je do greške. Pokušajte ponovo kasnije.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <ScrollProgress />
      </section>
    </>
  );
}

export default Kontakt;

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
