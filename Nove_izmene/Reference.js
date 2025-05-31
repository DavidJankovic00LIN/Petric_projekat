import React, { useState, useEffect } from "react";
import Kran from "../assets/Kran.png";
import GalleryModal from "./GalleryModal";


import Slika1 from "../assets/slike/Slika1.jpg";
import Slika2 from "../assets/slike/Slika2.jpg";
import Slika3 from "../assets/slike/Slika3.jpg";
import Slika4 from "../assets/slike/Slika4.png";
import Slika5 from "../assets/slike/Slika5.jpg";
import Slika6 from "../assets/slike/Slika6.jpg";

function Reference() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);

  // Primer podataka za galerije po projektima
  const projectGalleries = {
    project1: [Slika1, Slika2, Slika3],
    project2: [Slika4, Slika5, Slika6]
    
  };

  const openGallery = (projectId) => {
    setCurrentProjectImages(projectGalleries[projectId] || []);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <section className="py-16 w-full bg-gradient-to-r from-black to-[#002366]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-12">
            Reference
          </h2>

          {/* Kartice red br 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prva kartica */}
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
                <div className="absolute w-full h-full rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-700 p-4">
                  <div className="py-4">
                    <p className="text-xl text-white md:font-bold inline">
                      Ime Projekta:{" "}
                    </p>
                    <p className="text-xl text-white inline">Krušik gasovod</p>
                    <br />

                    <p className="text-xl text-white md:font-bold inline">
                      Korisnik:{" "}
                    </p>
                    <p className="text-xl text-white inline">
                      Krušik Holding Valjevo
                    </p>
                    <br />

                    <p className="text-xl text-white md:font-bold inline">
                      Trajanje projekta:{" "}
                    </p>
                    <p className="text-xl text-white inline">
                      12.12.2024 - 15.04.2025
                    </p>
                  </div>

                  {/* Dugme ka galeriji */}
                  <div className="absolute right-0 bottom-0 p-8">
                    <button
                      onClick={() => openGallery('project1')}
                      className="relative overflow-hidden px-6 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] group transition-all duration-300 hover:brightness-110"
                    >
                      <span className="relative z-10">Galerija</span>
                      <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
                    </button>
                  </div>
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
                {/* Zadnja strana */}
                <div className="absolute w-full h-full rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-700 p-4">
                  <div className="py-4">
                    <p className="text-xl text-white md:font-bold inline">
                      Ime Projekta:{" "}
                    </p>
                    <p className="text-xl text-white inline">Hidroelektrana</p>
                    <br />

                    <p className="text-xl text-white md:font-bold inline">
                      Korisnik:{" "}
                    </p>
                    <p className="text-xl text-white inline">
                      Elektroprivreda Srbije
                    </p>
                    <br />

                    <p className="text-xl text-white md:font-bold inline">
                      Trajanje projekta:{" "}
                    </p>
                    <p className="text-xl text-white inline">
                      01.01.2024 - 30.06.2024
                    </p>
                  </div>

                  {/* Dugme ka galeriji */}
                  <div className="absolute right-0 bottom-0 p-8">
                    <button
                      onClick={() => openGallery('project2')}
                      className="relative overflow-hidden px-6 py-2 rounded text-white bg-gradient-to-r from-black to-[#002366] group transition-all duration-300 hover:brightness-110"
                    >
                      <span className="relative z-10">Galerija</span>
                      <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Treća kartica */}
            <div className="group [perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Prednja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg bg-gray-700 flex flex-col items-center justify-center p-4">
                  <img
                    src={Kran}
                    alt="Under construction"
                    className="h-36 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Under construction...
                  </h3>
                </div>

                {/* Zadnja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-gray-700 flex items-center justify-center ring-4 ring-blue-800">
                  <p className="text-gray-400 italic"></p>
                </div>
              </div>
            </div>


          </div>

          {/* Kartice red br 2*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {/* Jedna kartica */}
            <div className="group [perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Prednja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg bg-gray-700 flex flex-col items-center justify-center p-4">
                  <img
                    src={Kran}
                    alt="Under construction"
                    className="h-36 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Under construction...
                  </h3>
                </div>

                {/* Zadnja strana – ostavi prazno ili po želji */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-gray-700 flex items-center justify-center ring-4 ring-blue-800">
                  <p className="text-gray-400 italic"></p>
                </div>
              </div>
            </div>

            {/* Druga kartica */}
            <div className="group [perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Prednja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg bg-gray-700 flex flex-col items-center justify-center p-4">
                  <img
                    src={Kran}
                    alt="Under construction"
                    className="h-36 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Under construction...
                  </h3>
                </div>

                {/* Zadnja strana – ostavi prazno ili po želji */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-gray-700 flex items-center justify-center ring-4 ring-blue-800">
                  <p className="text-gray-400 italic"></p>
                </div>
              </div>
            </div>

            {/* Treća kartica */}
            <div className="group [perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Prednja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg bg-gray-700 flex flex-col items-center justify-center p-4">
                  <img
                    src={Kran}
                    alt="Under construction"
                    className="h-36 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Under construction...
                  </h3>
                </div>

                {/* Zadnja strana – ostavi prazno ili po želji */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-gray-700 flex items-center justify-center ring-4 ring-blue-800">
                  <p className="text-gray-400 italic"></p>
                </div>
              </div>
            </div>
          </div>



          {/* Kartice red br 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Jedna kartica */}
            <div className="group [perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Prednja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg bg-gray-700 flex flex-col items-center justify-center p-4">
                  <img
                    src={Kran}
                    alt="Under construction"
                    className="h-36 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Under construction...
                  </h3>
                </div>

                {/* Zadnja strana – ostavi prazno ili po želji */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-gray-700 flex items-center justify-center ring-4 ring-blue-800">
                  <p className="text-gray-400 italic"></p>
                </div>
              </div>
            </div>

            {/* Druga kartica */}
            <div className="group [perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Prednja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg bg-gray-700 flex flex-col items-center justify-center p-4">
                  <img
                    src={Kran}
                    alt="Under construction"
                    className="h-36 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Under construction...
                  </h3>
                </div>

                {/* Zadnja strana – ostavi prazno ili po želji */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-gray-700 flex items-center justify-center ring-4 ring-blue-800">
                  <p className="text-gray-400 italic"></p>
                </div>
              </div>
            </div>

            {/* Treća kartica */}
            <div className="group [perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Prednja strana */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg bg-gray-700 flex flex-col items-center justify-center p-4">
                  <img
                    src={Kran}
                    alt="Under construction"
                    className="h-36 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Under construction...
                  </h3>
                </div>

                {/* Zadnja strana – ostavi prazno ili po želji */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-gray-700 flex items-center justify-center ring-4 ring-blue-800">
                  <p className="text-gray-400 italic"></p>
                </div>
              </div>
            </div>
          </div>



       

          <GalleryModal 
            isOpen={isGalleryOpen} 
            onClose={() => setIsGalleryOpen(false)}
            images={currentProjectImages}
          />

          <ScrollProgress />
        </div>
      </section>
    </>
  );
}

export default Reference;



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
