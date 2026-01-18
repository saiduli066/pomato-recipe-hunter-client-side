import React, { useContext, useEffect, useState } from "react";
import bannerImage from "../assets/images/foodhub-slider-main-food-v4.jpg";
import { FaThumbsUp, FaArrowRight, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ColorRing } from "react-loader-spinner";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);

  const [recipes, setRecipes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(recipes.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* spinner */}
      {loading && (
        <div className="flex h-screen items-center justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#E4A951", "#2A303C", "#e15b64", "#abbd81", "#849b87"]}
          />
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
            alt="Australian Cuisine"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="relative container mx-auto h-full flex items-center px-6">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block px-4 py-1 border border-yellow-400 text-yellow-400 rounded-full text-sm font-semibold tracking-wide uppercase">
              Exclusive Recipes
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
              Taste the Spirit of <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Australia
              </span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Discover a curated collection of authentic Australian recipes.
              From the rugged outback to modern Sydney cafes, experience
              culinary excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary btn-lg border-none bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30">
                Explore Recipes <FaArrowRight className="ml-2" />
              </button>
              <button className="btn btn-outline btn-lg text-white hover:bg-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Authentic Flavors",
              desc: "Recipes sourced directly from top Australian chefs.",
            },
            {
              title: "Premium Content",
              desc: "Exclusive access to masterclasses and special dishes.",
            },
            {
              title: "Community Driven",
              desc: "Join thousands of food lovers sharing their passion.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600 text-2xl font-bold">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Section */}
      <div className="container mx-auto py-24 px-6" id="recipes">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Creations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hand-picked recipes for the discerning home cook. Rated by our
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes.slice(0, visibleCount).map((recipe) => (
            <Link
              to={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="group"
            >
              <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full group-hover:-translate-y-2">
                <figure className="relative h-72 overflow-hidden">
                  <LazyLoad height={288} offset={100}>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </LazyLoad>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    {recipe.isPremium && (
                      <span className="badge bg-yellow-500 border-none text-black font-bold mb-2">
                        Editor's Choice
                      </span>
                    )}
                  </div>
                </figure>
                <div className="card-body p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="card-title text-xl font-bold text-gray-800 line-clamp-2 min-h-[3.5rem] group-hover:text-orange-600 transition-colors">
                      {recipe.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="font-semibold text-gray-700">
                        {recipe.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-gray-400" />
                      <span>{(Math.random() * 30 + 15).toFixed(0)} min</span>
                    </div>
                    <div className="ml-auto font-medium text-orange-600">
                      View Recipe →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < recipes.length && (
          <div className="text-center mt-16">
            <button
              onClick={handleSeeMore}
              className="btn btn-primary btn-lg border-none bg-slate-900 text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/30 px-12 capitalize rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              See More Recipes
            </button>
          </div>
        )}
      </div>

      {/* Newsletter / CTA */}
      <div className="bg-neutral-900 text-white py-24 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Master the Art of Australian Cooking
          </h2>
          <p className="mb-8 text-gray-400 max-w-xl mx-auto">
            Join our newsletter to receive weekly exclusive recipes, chef
            interviews, and cooking tips directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="input input-lg w-full text-black"
            />
            <button className="btn btn-primary btn-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
