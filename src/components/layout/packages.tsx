import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { LiaStarSolid, LiaCommentSolid, LiaHeartSolid, LiaShareSolid } from "react-icons/lia";

const data = [
  {
    id: 1,
    title: "HoneyMoon",
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente",
  },
  {
    id: 2,
    title: "Mountain Tour",
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente",
  },
  {
    id: 3,
    title: "Medical Tour",
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente",
  },
  {
    id: 4,
    title: "Adventure Jungle",
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro assumenda tempora sapiente",
  },
];

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
      <div className="flex justify-center text-center w-full bg-[#f6f8f9] mt-10">
        <Carousel className="mt-10">
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem className="basis-1/3" key={item.id}>
                <Card className="w-90 relative left-16 shadow border-none overflow-hidden transition-transform transform hover:scale-105">
                  <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                  <CardHeader className="flex flex-row justify-between items-center p-4">
                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                    <div className="flex items-center space-x-1">
                      {[...Array(4)].map((_, index) => (
                        <div key={index} className="w-5 h-5 text-yellow-400">
                          <LiaStarSolid />
                        </div>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    <CardDescription className="text-sm text-gray-600 hover:text-yellow-400 transition-colors">
                      {item.description}
                    </CardDescription>
                  </CardContent>

                  <div className="w-80 h-0.5 bg-[#ebeef0] mx-auto mb-4"></div>

                  <CardFooter className="flex items-center space-x-10">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 hover:text-yellow-400 transition-colors">
                        <LiaCommentSolid />
                      </span>
                      <span className="text-sm">Comments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 hover:text-yellow-400 transition-colors">
                        <LiaHeartSolid />
                      </span>
                      <span className="text-sm">Likes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 hover:text-yellow-400 transition-colors">
                        <LiaShareSolid />
                      </span>
                      <span className="text-sm">Share</span>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Sticky Background Section */}
      <div
  className="w-full mt-10 h-[400px] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
    backgroundAttachment: "fixed",
  }}
>
  <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
    <h2 className="text-3xl font-bold text-white mb-4">Explore More</h2>
    <p className="text-lg text-gray-200 mb-6">
      Discover amazing destinations and create unforgettable memories with our exclusive packages.
    </p>
    <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
      Book Now
    </button>
  </div>
</div>


    </div>
  );
};

export default Packages;