import React, { useContext, useEffect, useState } from "react";
import bannerImage from "../assets/images/foodhub-slider-main-food-v4.jpg";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ColorRing } from "react-loader-spinner";
import LazyLoad from "react-lazy-load";


const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);

  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-side-saiduli066.vercel.app/chefs`)
      .then((res) => res.json())
      .then((data) => setChefs(data))
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
        <h2 className="text-xl text-center my-5 md:my-16 md:text-4xl font-[600] ">
          Featuring the Famous Chefs of Australia
        </h2>

        <div>
          {" "}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 text-center gap-y-8">
            {/* {chefs.map((chef) => (
              <div key={chef.id}>
                <div className="card w-80 md:w-96 bg-base-100 mx-auto shadow-lg">
                  <figure>
                    <img
                      src={chef.chef_picture}
                      className="object-cover w-full h-[295px]"
                    />
                  </figure> */}
            {chefs.map((chef) => (
              <div key={chef.id}>
                <div className="card w-80 md:w-96 bg-base-100 mx-auto shadow-lg">
                  <figure>
                    <LazyLoad
                      height={295}
                      offsetVertical={500}
                      debounce={false}
                      placeholder={
                        <div className="w-full h-[295px] flex items-center justify-center">
                          <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={[
                              "#e15b64",
                              "#f47e60",
                              "#f8b26a",
                              "#abbd81",
                              "#849b87",
                            ]}
                          />
                        </div>
                      }
                    >
                      <img
                        src={chef.chef_picture}
                        className="object-cover w-full h-[295px]"
                        alt={chef.chef_name}
                      />
                    </LazyLoad>
                        </figure>
                        
                  <div className="card-body text-left">
                    <h2 className="card-title ">{chef.chef_name}</h2>
                    <p className="font-[500]">
                      Experience:{" "}
                      <span className="font-normal">{chef.experience}</span>
                    </p>
                    <p className="font-[500]">
                      Numbers of Recipes:{" "}
                      <span className="font-normal">{chef.recipes.length}</span>
                    </p>
                    <div className="card-actions flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FaThumbsUp className="text-green-300" />{" "}
                        <p>{chef.likes}</p>
                      </div>
                      <Link to={`/chefs/${chef.id}`}>
                        <div className="btn btn-success text-white">
                          View Recipe
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
