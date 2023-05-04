import React, { useEffect, useState } from "react";
import bannerImage from "../assets/images/foodhub-slider-main-food-v4.jpg";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-side-saiduli066.vercel.app/chefs`)
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
    }, [])
    
  return (
    <div>
      <div className="relative">
        <img
          src={bannerImage}
          className="w-full md:h-[100vh]"
          alt="Banner Image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex  flex-col justify-center p-3 z-10">
          <h1 className=" text-xl md:text-5xl text-white font-bold mb-4">
            Where cooking meets creativity
          </h1>
          <p className="text-sm  md:text-2xl font-[400] text-white">
            Learn how to make your favorite restaurant's dishes
          </p>
        </div>
      </div>

      {/* chefs category */}

      <div>
        <h2>{chefs.length}: Chefs are here </h2>

        <div className=" w-full grid grid-cols-1 md:grid-cols-3 text-center md:ms-[3em] gap-y-8">
          {chefs.map((chef) => (
            <div>
              <div className="card w-96 bg-base-100 shadow-lg">
                <figure>
                  <img
                    src={chef.chef_picture}
                    className="object-cover w-full h-[295px]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{chef.chef_name}</h2>
                  <p>
                    Experience: <span>{chef.experience}</span>
                  </p>
                  <p>
                    Numbers of Recipes: <span>{chef.recipes.length}</span>
                  </p>
                  <div className="card-actions flex justify-between ">
                    <div className="">
                      <FaThumbsUp className="text-green-300" />{" "}
                      <span>{chef.likes}</span>
                    </div>
                    <Link to='/view-recipe'>
                      <div className="btn btn-success">View Recipe</div>
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

export default Home;
