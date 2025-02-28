import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Img1 from "../../assets/plane.jpg";
import Img2 from "../../assets/tour.jpg";
import Img3 from "../../assets/hotel.jpg";
import Img4 from "../../assets/medical.jpg";
import { IoMdCheckbox } from "react-icons/io";

const ServiceSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold my-4">Our Great Services</h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your journey to unforgettable experiences starts here. Explore our destinations, packages, and more.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center w-full bg-[#f6f8f9] mt-10">
        <Tabs defaultValue="airplane Ticket" className="w-full max-w-4xl">
          {/* Tab List */}
          <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-6 md:gap-10 p-4 text-[#555] rounded-lg">
            <TabsTrigger value="airplane Ticket" className="px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-gray-200 transition-all text-sm md:text-base">
              Airplane Ticket
            </TabsTrigger>
            <TabsTrigger value="worldwide" className="px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-gray-200 transition-all text-sm md:text-base">
              Worldwide Tour
            </TabsTrigger>
            <TabsTrigger value="hotel" className="px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-gray-200 transition-all text-sm md:text-base">
              Hotel Reservation
            </TabsTrigger>
            <TabsTrigger value="medical" className="px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-gray-200 transition-all text-sm md:text-base">
              Medical Tour
            </TabsTrigger>
          </TabsList>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-16">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left ">
              <TabsContent value="airplane Ticket">
                <h2 className="text-2xl font-bold mb-4">Airline Tickets</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente
                  voluptatem similique qui harum dolorum laborum odio.
                </p>
                <ul className="mt-12  ">
                    <li className="flex justify-around text-center "> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                </ul>
                <p className="mt-12"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur, illo repudiandae quis quisquam cupiditate velit voluptates.</p>
              </TabsContent>
              <TabsContent value="worldwide">
                <h2 className="text-2xl font-bold mb-4">Worldwide Tour</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente
                  voluptatem similique qui harum dolorum laborum odio.
                </p>
                <ul className="mt-12  ">
                    <li className="flex justify-around text-center "> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                </ul>
                <p className="mt-12"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur, illo repudiandae quis quisquam cupiditate velit voluptates.</p>
              </TabsContent>
              <TabsContent value="hotel">
                <h2 className="text-2xl font-bold mb-4">Hotel Reservation</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente
                  voluptatem similique qui harum dolorum laborum odio.
                </p>
                <ul className="mt-12  ">
                    <li className="flex justify-around text-center "> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                </ul>
                <p className="mt-12"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur, illo repudiandae quis quisquam cupiditate velit voluptates.</p>
              </TabsContent>
              <TabsContent value="medical">
                <h2 className="text-2xl font-bold mb-4">Medical Tour</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente
                  voluptatem similique qui harum dolorum laborum odio.
                </p>
                <ul className="mt-12  ">
                    <li className="flex justify-around text-center "> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                    <li className="flex justify-around text-center"> < IoMdCheckbox className="font-bold text-2xl text-[#ffc527]"/> <p> Nam sit amet eros vel nunc pharetra imperdiet. </p> </li>
                </ul>
                <p className="mt-12"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur, illo repudiandae quis quisquam cupiditate velit voluptates.</p>
              </TabsContent>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center relative left-20 bg-[#fff] shadow-2xl">
              <TabsContent value="airplane Ticket">
                <img src={Img1} alt="Airplane Ticket" className="rounded-lg shadow-md w-full max-w-xs md:max-w-sm" />
              </TabsContent>
              <TabsContent value="worldwide">
                <img src={Img2} alt="Worldwide Tour" className="rounded-lg shadow-md w-full max-w-xs md:max-w-sm" />
              </TabsContent>
              <TabsContent value="hotel">
                <img src={Img3} alt="Hotel Reservation" className="rounded-lg shadow-md w-full max-w-xs md:max-w-sm" />
              </TabsContent>
              <TabsContent value="medical">
                <img src={Img4} alt="Medical Tour" className="rounded-lg shadow-md w-full max-w-xs md:max-w-sm" />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ServiceSection;
