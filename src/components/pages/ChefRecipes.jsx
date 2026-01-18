import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaClock,
  FaHeart,
  FaStar,
  FaArrowLeft,
  FaUtensils,
} from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { ColorRing } from "react-loader-spinner";

const ChefRecipes = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chefName, setChefName] = useState("");

  // Mock Chefs Data (Should ideally come from a context or API)
  const chefs = [
    { id: 1, name: "Curtis Stone" },
    { id: 2, name: "Maggie Beer" },
    { id: 3, name: "Kylie Kwong" },
    { id: 4, name: "George Calombaris" },
    { id: 5, name: "Donna Hay" },
    { id: 6, name: "Peter Gilmore" },
  ];

  useEffect(() => {
    const chef = chefs.find((c) => c.id === parseInt(id));
    setChefName(chef ? chef.name : "Chef");

    // Fetch all recipes and simulate filtering for this chef
    fetch(`http://localhost:5000/recipes`)
      .then((res) => res.json())
      .then((data) => {
        // Simulate "Chef's Recipes" by taking a deterministic slice based on ID
        // ensuring different chefs show different (or overlapping) sets
        const start = (parseInt(id) * 2) % data.length;
        const end = start + 6; // Show 6 recipes per chef
        const chefRecipes =
          data.slice(start, end).length < 2
            ? data.slice(0, 6)
            : data.slice(start, end);

        setRecipes(chefRecipes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          colors={["#d97706", "#b45309", "#f59e0b", "#78350f", "#92400e"]}
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link
            to="/chefs"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors mb-4 font-medium"
          >
            <FaArrowLeft size={14} /> Back to Chefs
          </Link>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
            <span className="text-amber-600">{chefName}'s</span> Signature
            Dishes
          </h1>
          <p className="text-slate-500 mt-2">
            Explore the selected masterpieces curated by {chefName}.
          </p>
        </div>

        {recipes.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-700">
              No recipes found.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <Link to={`/recipes/${recipe.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <LazyLoad height={256} offset={300} threshold={0.95}>
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </LazyLoad>
                    {recipe.isPremium && (
                      <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ★ Premium
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">
                        View detailed instructions
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {recipe.title}
                    </h3>

                    <div className="flex items-center justify-between text-slate-500 text-sm border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-amber-400" />
                        <span className="font-medium text-slate-700">
                          {recipe.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <FaClock size={14} />
                          <span>35 min</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaHeart size={14} className="text-red-400" />
                          <span>{recipe.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefRecipes;
