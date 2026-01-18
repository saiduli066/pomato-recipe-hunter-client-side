import React from "react";
import { FaUtensils, FaAward, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-24 font-sans text-slate-800">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bringing the authentic taste of the Australian outback and coastal
            kitchens to your home.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Passionate About{" "}
              <span className="text-amber-600">Aussie Flavors</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded in 2023, Aussie Cuisine started with a simple mission: to
              share the diverse and vibrant culinary heritage of Australia with
              the world. From the indigenous bush tucker to the modern fusion of
              Melbourne's laneways, we celebrate it all.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We believe that food is more than just sustenance; it's a story on
              a plate. Our platform connects you with recipes that have been
              passed down through generations and innovated by contemporary
              chefs.
            </p>

            <div className="pt-4 flex gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-amber-600">500+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wide">
                  Recipes
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-amber-600">50+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wide">
                  Chefs
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-amber-600">10k+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wide">
                  Users
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Chef Cooking"
              className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition duration-500"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm mx-auto mb-6">
              <FaUtensils size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Authenticity</h3>
            <p className="text-slate-500">
              We verify every recipe to ensure it stays true to its roots.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm mx-auto mb-6">
              <FaUsers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-slate-500">
              Built by food lovers, for food lovers. Join our family.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm mx-auto mb-6">
              <FaAward size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality</h3>
            <p className="text-slate-500">
              Only the best ingredients and techniques make the cut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
