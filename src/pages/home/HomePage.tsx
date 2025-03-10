import HeroPage from "@/components/hero/HeroPage";
import Header from "../../components/layout/Header";
import ServiceSection from "@/components/layout/servicesSection";
import Packages from "@/components/layout/packages";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Sticky Header */}
      <Header />
      {/* Full-width Hero Section */}
      <HeroPage />
      <ServiceSection />
      <Packages />
    </div>
  );
};

export default HomePage;