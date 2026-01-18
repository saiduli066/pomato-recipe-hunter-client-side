import React from "react";
import {
  FaStar,
  FaArrowRight,
  FaUtensils,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Chefs = () => {
  const chefs = [
    {
      id: 1,
      name: "Curtis Stone",
      spec: "Fresh & Seasonal",
      exp: "25 Years",
      recipes: 120,
      likes: "15k",
      image:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800", // Male Chef
    },
    {
      id: 2,
      name: "Maggie Beer",
      spec: "Regional Cooking",
      exp: "40 Years",
      recipes: 250,
      likes: "32k",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800", // Female Chef
    },
    {
      id: 3,
      name: "Kylie Kwong",
      spec: "Chinese-Australian",
      exp: "30 Years",
      recipes: 95,
      likes: "10k",
      image:
        "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=800", // Asian Female Chef
    },
    {
      id: 4,
      name: "George Calombaris",
      spec: "Greek-Australian",
      exp: "22 Years",
      recipes: 85,
      likes: "12k",
      image:
        "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&q=80&w=800", // Male Chef
    },
    {
      id: 5,
      name: "Donna Hay",
      spec: "Food Styling",
      exp: "20 Years",
      recipes: 300,
      likes: "45k",
      image:
        "https://images.unsplash.com/photo-1607631568010-96bbb7ea4eff?auto=format&fit=crop&q=80&w=800", // Female Chef
    },
    {
      id: 6,
      name: "Peter Gilmore",
      spec: "Molecular Gastronomy",
      exp: "28 Years",
      recipes: 60,
      likes: "8k",
      image:
        "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=800", // Male Chef
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
            Masters of Flavor
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-2 mb-6">
            Our Featured Chefs
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Meet the culinary artists behind our exclusive Australian recipes.
            Legendary figures who have shaped the nation's palate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ring-1 ring-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{chef.name}</h3>
                  <p className="text-amber-400 font-medium text-sm mb-4">
                    {chef.spec}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <div className="flex gap-4 text-sm font-medium">
                      <div className="flex items-center gap-1">
                        <FaUtensils className="text-amber-500" /> {chef.recipes}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-red-500" /> {chef.likes}
                      </div>
                    </div>

                    <Link to={`/chef-recipes/${chef.id}`}>
                      <button className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-colors shadow-lg">
                        <FaArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
