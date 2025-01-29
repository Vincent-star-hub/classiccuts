import React from "react";
import { Scissors, Clock, SprayCan, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesList = [
    {
      title: "Classic Haircut",
      description: "Precision cut, including hot towel neck shave and styling",
      duration: "45 mins",
      price: "₱500",
      icon: <Scissors className="w-6 h-6" />,
      gradient: "from-amber-500 to-amber-400",
    },
    {
      title: "Beard Trim & Shape",
      description: "Professional beard grooming with straight razor line-up",
      duration: "30 mins",
      price: "₱550",
      icon: <Scissors className="w-6 h-6" />,
      gradient: "from-amber-400 to-yellow-400",
    },
    {
      title: "Hot Towel Shave",
      description: "Traditional straight razor shave with hot towel treatment",
      duration: "45 mins",
      price: "₱900",
      icon: <Scissors className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      title: "Hair Color & Highlights",
      description: "Professional hair coloring and highlighting services",
      duration: "90 mins",
      price: "from ₱1,500",
      icon: <SprayCan className="w-6 h-6" />,
      gradient: "from-orange-400 to-amber-400",
    },
    {
      title: "Kids Haircut",
      description: "Gentle and patient service for our younger clients",
      duration: "30 mins",
      price: "₱200",
      icon: <Scissors className="w-6 h-6" />,
      gradient: "from-yellow-400 to-amber-400",
    },
    {
      title: "Hair & Beard Package",
      description:
        "Complete grooming package including haircut and beard service",
      duration: "75 mins",
      price: "₱600",
      icon: <Scissors className="w-6 h-6" />,
      gradient: "from-amber-400 to-orange-400",
    },
  ];

  return (
    <div className=" bg-black">
      {/* Header */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-black/0 to-black/0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Experience premium grooming services tailored to your style. Each
            service includes a consultation to understand your preferences.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-screen">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <span className="text-2xl font-bold text-amber-400">
                  {service.price}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center text-gray-400 group-hover:text-amber-400 transition-colors">
                <Clock className="w-4 h-4 mr-2" />
                <span>{service.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-16">
          <Link
            to="/booking"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-black px-8 py-4 rounded-full hover:from-amber-400 hover:to-amber-300 transition-all duration-300 transform hover:scale-105"
          >
            Book Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
