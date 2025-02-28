import React from "react";


const Packages: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold my-4">Most Popular Packages </h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your journey to unforgettable experiences starts here. Explore our destinations, packages, and more.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center w-full bg-[#f6f8f9] mt-10">

      </div>
    </div>
  );
};

export default Packages;
