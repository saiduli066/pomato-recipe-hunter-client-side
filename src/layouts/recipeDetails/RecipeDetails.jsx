import React from "react";
import { FaRegStar, FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const ChefAndRecipes = useLoaderData();
  return (
    <div className="mx-auto md:mx-2em md:flex md:justify-center w-full my-5 md:my-10">
      <div className="card md:card-side w-full md:w-[70%] mx-auto bg-base-100 shadow-xl">
        <figure className="md:w-[40%]">
          <img
            className="object-cover md:w-full  md:h-[324px]"
            src={ChefAndRecipes.chef_picture}
            alt={ChefAndRecipes.chef_name}
          />
        </figure>
        <div className="card-body md:w-[50%]">
          <h2 className="card-title">{ChefAndRecipes.chef_name}</h2>
          <p>{ChefAndRecipes.bio}</p>
          <p className="font-[500]">
            Experience:{" "}
            <span className="font-normal">{ChefAndRecipes.experience}</span>
          </p>
          <p className="font-[500]">
            Numbers of Recipes:{" "}
            <span className="font-normal">{ChefAndRecipes.recipes.length}</span>
          </p>
          <div className="flex items-center">
            <FaThumbsUp className="text-green-300" />{" "}
            <p>{ChefAndRecipes.likes}</p>
          </div>
          <div className="card-actions flex justify-between">
            <button className="text-orange-600"><FaRegStar/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
