import React, { useState } from "react";
import { FaBookmark, FaRegStar, FaStar, FaThumbsUp } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const RecipeDetails = () => {
  const { id } = useParams();
  const ChefAndRecipes = useLoaderData();
  const { chef_picture, chef_name, experience, bio, recipes, rating, likes } =
    ChefAndRecipes;

      const [favoriteList, setFavoriteList] = useState([]);

      const handleFavorite = (recipe) => {
        toast("Added to the favorite list!");
        setFavoriteList((prevList) => [...prevList, recipe]);
    };
    
     const isFavorite = (recipe) => {
       return favoriteList.some((favRecipe) => favRecipe.id === recipe.id);
     };

    
    // const [isClicked, setIsClicked] = useState(false);



  return (
    // Chef details..........//

    <div className="mx-2">
      <div className="mx-auto  md:mx-2em md:flex md:justify-center w-full my-5 md:my-16">
        <div className="card md:card-side w-full md:w-[90%] mx-auto bg-base-100 shadow-xl">
          <figure className="md:w-[40%]">
            <img
              className="object-cover rounded w-full h-auto md:w-full md:h-[324px] px-4 max-w-full"
              src={chef_picture}
              alt={chef_name}
            />
          </figure>
          <div className="card-body md:w-[50%]">
            <h2 className="card-title">{ChefAndRecipes.chef_name}</h2>
            <p>{bio}</p>
            <p className="font-[500]">
              Experience: <span className="font-normal">{experience}</span>
            </p>
            <p className="font-[500]">
              Numbers of Recipes:{" "}
              <span className="font-normal">{recipes.length}</span>
            </p>
            <div className="flex items-center">
              <FaThumbsUp className="text-green-300" /> <p>{likes}</p>
            </div>

            <div className="card-actions">
              <div className="">
                <Rating
                  placeholderRating={rating}
                  readonly
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar className="text-orange-400" />}
                  fullSymbol={<FaStar />}
                ></Rating>
                <span>{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-[600] md:text-3xl  md:my-10 text-center">Recipes</h2>

      {/*.............. recipe details......... */}

      <div className="">
        {recipes.map((recipe) => (
          <div className="card md:w-[90%] mx-auto md:my-10 bg-base-100 shadow-xl">
            <div className="md:flex md:items-center">
              <figure className="px-10 pt-10">
                <img
                  src={recipe.image_url}
                  alt={recipe.recipe_name}
                  className="rounded-xl max-w-full w-full h-auto md:h-[20em]"
                />
              </figure>
              <div className="px-10 pt-10">
                <h2 className="font-[600] md:text-2xl mb-2">
                  {recipe.recipe_name}
                </h2>
                <h4 className="font-[500] md:text-xl  mb-2">Ingredients:</h4>
                {recipe.ingredients.map((ingredient) => (
                  <li className="">{ingredient}</li>
                ))}
              </div>
            </div>
            <div className="card-body">
              <h4 className="font-[500] md:text-xl  mb-2">Cooking Method:</h4>
              <p className="text-justify">{recipe.cooking_method}</p>
              <div className="card-actions flex items-center justify-between">
                <div className="">
                  <Rating
                    placeholderRating={recipe.rating}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-orange-400" />}
                    fullSymbol={<FaStar />}
                  ></Rating>
                  <span>{recipe.rating}</span>
                </div>
                <div className="flex gap-2 items-center">
                            <p className="font-[500] md:text-xl  mb-2">Favorite</p>{" "}
                            
                  <button
                    className={`btn btn-outline px-6 ${
                      isFavorite(recipe) ? "btn-disabled" : ""
                    } `}
                    onClick={() => handleFavorite(recipe)}
                    disabled={isFavorite(recipe)}
                  >
                    <FaBookmark className="text-green-400" />
                  </button>
                </div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
