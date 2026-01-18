import React, { useContext, useEffect, useState } from "react";
import bannerImage from "../assets/images/foodhub-slider-main-food-v4.jpg";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ColorRing } from "react-loader-spinner";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

  return (
    <div>
      {/* spinner */}
      {loading && (
        <div>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}

      {/*...... */}

      <div className="relative">
        <img
          src={bannerImage}
          className="w-full md:h-[100vh] object-cover"
          alt="Banner Image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex  flex-col justify-center p-3 z-10 bg-black bg-opacity-40">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Australian Cuisine <br /> & Premium Recipes
            </h1>
            <p className="text-white text-xl md:w-1/2">
              Explore the authentic taste of Australia. From traditional meat
              pies to modern culinary masterpieces.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {recipe.title}
                  {recipe.isPremium && (
                    <div className="badge badge-secondary">Premium</div>
                  )}
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500 font-bold">
                    ★ {recipe.rating}
                  </span>
                  <span className="text-gray-500">({recipe.views} views)</span>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="btn btn-primary"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
