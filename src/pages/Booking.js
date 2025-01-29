import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import paperbg from "../images/paperbg.jpg";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Classic Haircut",
    "Beard Trim & Shape",
    "Hot Towel Shave",
    "Hair Color & Highlights",
    "Kids Haircut",
    "Hair & Beard Package",
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];

  return (
    <div className=" bg-black min-h-screen">
      {/* Header - Reduced top padding */}
      <div className="absolute inset-0">
        <img
          src={paperbg}
          alt="Barbershop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent" />
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-black/0 to-black/0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Book an Appointment
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Schedule your visit with our experienced barbers. Choose your
            preferred service, date, and time.
          </p>
        </div>
      </div>

      {/* Booking Form - Adjusted padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-zinc-800/70 backdrop-blur-sm p-6 rounded-2xl"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-2.5 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-2.5 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-2.5 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-2.5 text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-zinc-800"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-2.5 text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-2.5 text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        required
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option
                            key={time}
                            value={time}
                            className="bg-zinc-800"
                          >
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes - Reduced height */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Additional Notes
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-amber-400 w-5 h-5" />
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="pl-10 w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-2.5 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    placeholder="Any special requests or preferences..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-black py-3 rounded-xl hover:from-amber-400 hover:to-amber-300 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Information - Reduced padding and spacing */}
          <div className="space-y-4">
            {/* Opening Hours */}
            <div className="bg-zinc-800/70 backdrop-blur-sm p-4 rounded-2xl">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Opening Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-amber-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Booking Information */}
            <div className="bg-zinc-800/70 backdrop-blur-sm p-4 rounded-2xl">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Booking Information
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                  Please arrive 5 minutes before your appointment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                  24-hour cancellation notice required
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                  Late arrivals may result in reduced service time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                  We accept all major credit cards
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-800/70 backdrop-blur-sm p-4 rounded-2xl">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Need Help?
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-400 mr-2" />
                  <span className="text-gray-300">+1 234 567 8900</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-400 mr-2" />
                  <span className="text-gray-300">booking@classiccuts.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
