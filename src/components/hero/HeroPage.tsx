import React from "react";

const HeroPage: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center bg-cover bg-center">
      <div
      className="absolute inset-0 bg-black opacity-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative text-center text-white max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Explore the World with Us
        </h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p className="text-lg md:text-xl mb-8">
          Discover breathtaking destinations, unforgettable experiences, and the
          best travel packages tailored just for you. Start your journey today!
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroPage;