import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();
    const ChefAndRecipes = useLoaderData();
    return (
      <div>
        <h2>{ChefAndRecipes.chef_name}</h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
                <img className='w-full h-[324px]'
              src={ChefAndRecipes.chef_picture}
              alt={ChefAndRecipes.chef_name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RecipeDetails;