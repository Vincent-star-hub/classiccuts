import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import beard from "../images/beard.jpg";
import fade from "../images/fade.jpg";
import beardgrooming from "../images/beardgrooming.jpg";
import kidshairtcut from "../images/kidshaircut.jpg";
import hottowelshave from "../images/hottowel.jpg";
import haircoloring from "../images/haircoloring.jpg";
import modernstyling from "../images/modernstyling.jpg";
import texturedcrop from "../images/texturedcrop.jpg";
import premiumstyling from "../images/premiumstyling.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const galleryItems = [
    {
      title: "Classic Fade",
      category: "Haircuts",
      image: fade,
      description: "Clean fade with textured top",
    },
    {
      title: "Beard Grooming",
      category: "Beard",
      image: beardgrooming,
      description: "Professional beard shaping and grooming",
    },
    {
      title: "Modern Styling",
      category: "Styling",
      image: modernstyling,
      description: "Contemporary style with precision",
    },
    {
      title: "Hot Towel Shave",
      category: "Shaving",
      image: hottowelshave,
      description: "Traditional hot towel luxury shave",
    },
    {
      title: "Hair Coloring",
      category: "Color",
      image: haircoloring,
      description: "Professional color and highlights",
    },
    {
      title: "Kids Haircut",
      category: "Kids",
      image: kidshairtcut,
      description: "Kid-friendly styling experience",
    },
    {
      title: "Textured Crop",
      category: "Haircuts",
      image: texturedcrop,
      description: "Modern textured crop cut",
    },
    {
      title: "Beard Trim",
      category: "Beard",
      image: beard,
      description: "Precise beard trimming and shaping",
    },
    {
      title: "Premium Styling",
      category: "Styling",
      image: premiumstyling,
      description: "High-end styling service",
    },
  ];

  const categories = [
    "All",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-black">
      {/* Header */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-black/0 to-black/0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Browse through our collection of haircuts and styles. Get inspired
            for your next visit.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-zinc-900/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-amber-500 to-amber-400 text-black"
                      : "bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-zinc-900/50 backdrop-blur-sm"
            >
              <img
                src={item.image} // Replace with item.image when ready
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-amber-400 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-300 delay-150">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
