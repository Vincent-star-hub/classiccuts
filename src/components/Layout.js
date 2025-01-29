import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Twitter,
  Youtube,
  Scissors,
} from "lucide-react";
import logo from "../images/logo.png";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsNavbarVisible(true); // Always show navbar at the top
    } else if (window.scrollY > lastScrollY) {
      setIsNavbarVisible(false); // Hide navbar when scrolling down
    } else {
      setIsNavbarVisible(true); // Show navbar when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const debouncedHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [lastScrollY]);

  const leftNavItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
  ];

  const rightNavItems = [
    { path: "/gallery", label: "Gallery" },
    { path: "/team", label: "Team" },
    // { path: "/booking", label: "Book Now", isButton: true },
  ];

  const footerItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/team", label: "Our Team" },
    // { path: "/booking", label: "Book Now", isButton: true },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full  z-50 transition-all duration-300 ${
          isNavbarVisible ? "transform translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center h-28">
            {/* Left Navigation Items */}
            <div className="flex items-center space-x-12">
              {leftNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative group transition-colors text-xl font-medium
                    ${
                      isActive(item.path)
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }
                  `}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Centered Logo */}
            <Link to="/" className="mx-16 group">
              <div className="relative w-24 h-24">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Right Navigation Items */}
            <div className="flex items-center space-x-12">
              {rightNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative group transition-colors text-xl font-medium
                    ${
                      item.isButton
                        ? "bg-gradient-to-r from-amber-500 to-amber-400 text-black px-8 py-3 rounded-full hover:from-amber-400 hover:to-amber-300"
                        : isActive(item.path)
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }
                  `}
                >
                  {item.label}
                  {!item.isButton && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between h-24">
            <Link to="/" className="flex-shrink-0">
              <div className="relative w-16 h-16">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            <button
              className="text-white hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[...leftNavItems, ...rightNavItems].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      block px-4 py-4 rounded-lg transition-all duration-300 text-lg
                      ${
                        item.isButton
                          ? "bg-gradient-to-r from-amber-500 to-amber-400 text-black"
                          : "hover:bg-zinc-800 text-gray-300 hover:text-amber-400"
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Barbershop Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Scissors className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">
                  Classic<span className="text-amber-400">Cuts</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium grooming services for the modern gentleman. Experience
                the perfect blend of traditional craftsmanship and contemporary
                style.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <div key={index} className="group">
                    <Icon className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer transform group-hover:scale-110 duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Classic Haircut",
                  "Beard Trim",
                  "Hot Towel Shave",
                  "Hair Styling",
                  "Kids Haircut",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                Contact & Hours
              </h4>
              <ul className="space-y-4">
                {[
                  { Icon: Phone, text: "+1 234 567 8900" },
                  { Icon: Mail, text: "info@classiccuts.com" },
                  { Icon: MapPin, text: "123 Barber Street, City" },
                  { Icon: Clock, text: "Mon-Sat: 9AM-8PM" },
                ].map(({ Icon, text }, index) => (
                  <li key={index} className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                      <Icon size={16} className="text-amber-400" />
                    </div>
                    <span className="text-gray-400 group-hover:text-amber-400 transition-colors">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
            {/* <p className="text-gray-400">
              &copy; {new Date().getFullYear()} ClassicCuts. All rights
              reserved.
            </p> */}

            <p className="text-gray-400">
              &copy; 2008 ClassicCuts. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
