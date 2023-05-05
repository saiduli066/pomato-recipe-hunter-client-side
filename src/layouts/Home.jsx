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

      {/* extra section-1 */}

      {/* testimonials section */}

      <div className="bg-gray-100 py-10 px-5 md:px-20">
        <h2 className="text-xl text-center mb-5 md:mb-10 md:text-4xl font-[600] ">
          What our users say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white shadow-md rounded-md p-5 flex flex-col items-center transform hover:scale-[1.05] transition-all duration-[300ms]">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt="Anna Smith"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3 className="text-lg mt-3 font-[500]">Anna Smith</h3>
            <p className="text-sm mt-2 text-gray-600 text-center">
              "I love this website! It has helped me learn so many new recipes
              and improve my cooking skills. The chefs are amazing and very
              helpful."
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-5 flex flex-col items-center transform hover:scale-[1.05] transition-all duration-[300ms]">
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="John Doe"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3 className="text-lg mt-3 font-[500]">John Doe</h3>
            <p className="text-sm mt-2 text-gray-600 text-center">
              "This website is awesome! I have learned how to make some of my
              favorite dishes from different cuisines. The chefs are very
              friendly and knowledgeable."
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-5 flex flex-col items-center transform hover:scale-[1.05] transition-all duration-[300ms]">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Mary Jones"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3 className="text-lg mt-3 font-[500]">Mary Jones</h3>
            <p className="text-sm mt-2 text-gray-600 text-center">
              "This website is amazing! I have discovered so many new dishes and
              flavors. The chefs are very professional and creative."
            </p>
          </div>
        </div>
      </div>

      {/* extra section-2 */}
      {/* subscribe section */}

      <div className="bg-green-500 py-10 px-5 md:px-20">
        <h2 className="text-xl text-center text-white mb-5 md:mb-10 md:text-4xl font-[600] ">
          Subscribe to our newsletter
        </h2>
        <p className="text-sm text-center text-white mb-5 md:mb-10">
          Get the latest recipes, tips and news delivered to your inbox
        </p>
        <form className="flex flex-col items-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full md:w-[400px] py-3 px-5 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full md:w-[400px] py-3 px-5 mt-5 rounded-md bg-white text-green-500 font-bold hover:bg-green-400 hover:text-white transition-all duration-[300ms]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
