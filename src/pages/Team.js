import React from "react";
import {
  Scissors,
  Clock,
  SprayCan,
  ChevronRight,
  Star,
  Users,
  Trophy,
} from "lucide-react";
import barber1 from "../images/barber1.jpg";
import barber2 from "../images/barber2.jpg";
import barber3 from "../images/barber3.jpg";
import barber4 from "../images/barber4.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Master Barber",
      image: barber1,
      experience: "15 years experience",
      specialties: ["Classic Cuts", "Hot Towel Shaves", "Beard Styling"],
      stats: { rating: 4.9, clients: "2.5k+" },
    },
    {
      name: "Mike Johnson",
      role: "Senior Barber",
      image: barber2,
      experience: "10 years experience",
      specialties: ["Modern Styles", "Fades", "Hair Coloring"],
      stats: { rating: 4.8, clients: "2k+" },
    },
    {
      name: "David Wilson",
      role: "Color Specialist",
      image: barber4,
      experience: "8 years experience",
      specialties: ["Hair Coloring", "Highlights", "Style Consulting"],
      stats: { rating: 4.9, clients: "1.8k+" },
    },
    {
      name: "Robert Brown",
      role: "Junior Barber",
      image: barber3,
      experience: "5 years experience",
      specialties: ["Classic Cuts", "Beard Trims", "Kids Cuts"],
      stats: { rating: 4.7, clients: "1k+" },
    },
    // {
    //   name: "Emma Davis",
    //   role: "Professional Stylist",
    //   image: "https://via.placeholder.com/150",
    //   experience: "7 years experience",
    //   specialties: ["Women's Cuts", "Undercuts", "Hair Styling"],
    //   stats: { rating: 4.8, clients: "1.5k+" },
    // },
  ];

  return (
    <div className="bg-black">
      {/* Header */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-black/0 to-black/0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our experienced team of barbers is dedicated to providing you with
            the best grooming experience.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-white">
                  {member.name}
                </h3>
                <p className="text-amber-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">
                  {member.experience}
                </p>

                <div className="flex justify-between mb-6 p-3 bg-zinc-800 rounded-xl">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-white">{member.stats.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span className="text-white">{member.stats.clients}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300">
                    Specialties:
                  </h4>
                  <ul className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <Trophy className="w-4 h-4 text-amber-400" />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
