import React, { useState } from "react";
import { FaBookmark, FaRegStar, FaStar, FaPlay } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useLoaderData();
  const {
    title,
    image,
    category,
    area,
    instructions,
    ingredients,
    isPremium,
    video,
  } = recipe;

  const [favoriteList, setFavoriteList] = useState([]);

  const handleFavorite = (recipe) => {
    toast.success("Added to your favorites!");
    setFavoriteList((prevList) => [...prevList, recipe]);
  };

  const isFavorite = (recipe) => {
    return favoriteList.some((favRecipe) => favRecipe.id === recipe.id);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Media */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 z-20 container mx-auto px-6 pb-12 text-white">
          <div className="flex gap-2 mb-4">
            <span className="badge badge-accent uppercase font-bold tracking-widest">
              {category}
            </span>
            <span className="badge badge-outline text-white uppercase font-bold tracking-widest">
              {area}
            </span>
            {isPremium && (
              <span className="badge badge-error uppercase font-bold tracking-widest">
                Premium
              </span>
            )}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          <div className="flex gap-4">
            <button
              className={`btn btn-lg gap-2 ${isFavorite(recipe) ? "btn-success" : "btn-primary"}`}
              onClick={() => handleFavorite(recipe)}
              disabled={isFavorite(recipe)}
            >
              <FaBookmark />
              {isFavorite(recipe) ? "Saved" : "Save Recipe"}
            </button>
            {video && (
              <a
                href={video}
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-outline text-white hover:bg-white hover:text-black gap-2"
              >
                <FaPlay className="text-sm" /> Watch Video
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Ingredients Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-orange-50 p-8 rounded-3xl sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-orange-200 pb-4">
                Ingredients
              </h3>
              <ul className="space-y-4">
                {ingredients.map((ing, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                      ✓
                    </span>
                    <span className="text-lg">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Preparation Steps */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-bold mb-8 text-gray-800">
                Cooking Instructions
              </h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line text-xl font-light">
                {instructions}
              </div>
            </div>

            {/* Simulated Reviews Section for "Senior" feel */}
            <div className="mt-16 pt-10 border-t">
              <h3 className="text-2xl font-bold mb-6">Chef's Notes</h3>
              <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-yellow-500 italic text-gray-600">
                "For the best results, ensure all ingredients are at room
                temperature before starting. Allow the dish to rest for 10
                minutes before serving to let the flavors meld together
                perfectly."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
