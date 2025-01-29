import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Clock,
  MapPin,
  Scissors,
  Trophy,
  Users,
  Calendar,
  ChevronRight,
  Sparkles,
  Heart,
  Coffee,
} from "lucide-react";
import barbershop from "../images/barbershop2.jpg";
import barberinterior from "../images/barberinterior.jpg";
import barberatwork from "../images/barberatwork.jpg";

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      title: "Hair Cutting",
      description: "Style your favorite look with our expert styling team",
      icon: <Scissors className="w-6 h-6" />,
      gradient: "from-amber-600 to-amber-400",
    },
    {
      title: "Beard & Shave",
      description: "Premium beard grooming and luxury shave experience",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      title: "Hair Styling",
      description: "Complete styling with premium products",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-orange-500 to-amber-400",
    },
    {
      title: "Beauty & Spa",
      description: "Relaxing treatments for the modern gentleman",
      icon: <Coffee className="w-6 h-6" />,
      gradient: "from-amber-400 to-yellow-300",
    },
  ];

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Premium Service",
      description: "Experience the finest in men's grooming",
      gradient: "from-amber-600 to-amber-400",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Barbers",
      description: "Skilled professionals at your service",
      gradient: "from-orange-500 to-amber-400",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "10k+",
      label: "Happy Clients",
      gradient: "from-amber-500 to-amber-400",
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9",
      label: "Average Rating",
      gradient: "from-amber-400 to-yellow-400",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "15+",
      label: "Years Experience",
      gradient: "from-yellow-400 to-amber-400",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "30k+",
      label: "Hours Served",
      gradient: "from-amber-400 to-orange-400",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Business Professional",
      comment:
        "Best haircut experience I've ever had. The attention to detail is remarkable.",
      rating: 5,
      image: "/api/placeholder/64/64",
    },
    {
      name: "Mike Johnson",
      role: "Artist",
      comment:
        "Their beard grooming service is top-notch. Won't go anywhere else.",
      rating: 5,
      image: "/api/placeholder/64/64",
    },
    {
      name: "David Williams",
      role: "Entrepreneur",
      comment: "Professional service with amazing results. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/64/64",
    },
  ];

  const prices = [
    {
      service: "Classic Haircut",
      price: "$30",
      duration: "45 mins",
      includes: ["Consultation", "Shampoo", "Cut", "Style"],
    },
    {
      service: "Beard Trim",
      price: "$25",
      duration: "30 mins",
      includes: ["Shape", "Line-up", "Hot Towel"],
    },
    {
      service: "Full Service",
      price: "$50",
      duration: "75 mins",
      includes: ["Haircut", "Beard Trim", "Hot Towel", "Face Massage"],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="absolute inset-0">
        <img
          src={barbershop}
          alt="Barbershop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <section className="relative h-screen overflow-hidden flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full h-full flex items-center justify-center">
          <div className="max-w-3xl text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Transform Your Look, Elevate Your Confidence
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Step into our salon and leave looking sharp, refreshed, and ready
              to take on the world. With expert grooming tailored to your unique
              style, we deliver excellence every time.
              <span className="text-amber-400">
                {" "}
                Experience the difference.
              </span>
            </p>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium hover:from-amber-400 hover:to-amber-300 transition-all duration-300 transform hover:scale-105"
              >
                Book Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-md border border-amber-500 group">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                <span className="relative flex items-center justify-center gap-2 text-amber-500 group-hover:text-black transition-colors duration-300">
                  Watch Videos
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Rating Section */}
            <div className="mt-8 sm:mt-12 text-center sm:text-left">
              <span className="text-amber-400 font-semibold text-lg">
                #1 Rated Best Barber
              </span>
              <div className="flex justify-center sm:justify-start items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-gray-400">(500+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-white/0 to-white/0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Crafting confidence through exceptional grooming since 2008. We
            blend traditional barbering with modern style.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          {/* Top Section with Images */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <img
                src={barberinterior}
                alt="Barber Shop Interior"
                className="relative rounded-2xl w-full h-full object-cover transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"
              />
            </div>
            <div className="relative group mt-12 lg:mt-24">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <img
                src={barberatwork}
                alt="Barber at Work"
                className="relative rounded-2xl w-full h-full object-cover transform rotate-1 group-hover:rotate-2 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2008, Classic Cuts began with a simple vision: to
                create a space where traditional barbering meets modern style.
                What started as a small, two-chair shop has grown into a premier
                grooming destination, thanks to our dedication to craft and
                customer service.
              </p>
              <p className="text-gray-700">
                Our team of master barbers brings decades of combined
                experience, each specializing in different aspects of men's
                grooming. We've cultivated an atmosphere that goes beyond just
                haircuts – we're building a community where every client feels
                valued and understood.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Our Promise</h2>
              <p className="text-gray-700">
                At Classic Cuts, we promise more than just a haircut. We deliver
                an experience that combines technical excellence with
                personalized service. Every visit is an opportunity to refresh
                your style and boost your confidence.
              </p>
              <p className="text-gray-700">
                We stay current with the latest trends while honoring
                traditional techniques, ensuring you receive the best of both
                worlds. Our commitment to continuous learning means we're always
                evolving, bringing new styles and services to our valued
                clients.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-gray-100 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-200 transition-all duration-300"
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} transform group-hover:scale-110 transition-transform duration-300 w-fit`}
                >
                  {stat.icon}
                </div>
                <div className="mt-4">
                  <span className="block text-3xl font-bold text-black mb-1">
                    {stat.value}
                  </span>
                  <span className="text-gray-700">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-white px-8 py-4 rounded-full hover:from-amber-400 hover:to-amber-300 transition-all duration-300 transform hover:scale-105"
            >
              Book Your Visit
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent text-center">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-8">
            At our barbershop, we offer a range of high-quality grooming
            services designed to keep you looking sharp and feeling confident.
            From classic haircuts to modern styling, beard trims, and luxury
            shaves, our experienced barbers ensure a premium experience tailored
            to your needs. Explore our services below and discover the perfect
            grooming solution for you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-amber-400 group-hover:text-amber-300 transition-colors">
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent text-center">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-8">
            Our clients love their transformations! From sharp cuts to expert
            grooming, we deliver top-notch service that keeps them coming back.
            See what they have to say!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.comment}</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
