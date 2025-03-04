import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LiaStarSolid } from "react-icons/lia";

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
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold my-4">Most Popular Packages</h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your journey to unforgettable experiences starts here. Explore our destinations, packages, and more.
        </p>
      </div>

      <div className="flex justify-center text-center w-full bg-[#f6f8f9] mt-10">
        <Carousel className="w-full md:w-4/5 lg:w-3/4">
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem key={item.id} className="basis-full sm:basis-1 md:basis-1/2 lg:basis-1/3">
                <Card className="w-full shadow border-none overflow-hidden transition-transform transform hover:scale-105">
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
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Packages;
