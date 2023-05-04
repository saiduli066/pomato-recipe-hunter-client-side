import React from "react";
import bannerImage from "../assets/images/foodhub-slider-main-food-v4.jpg";
const Home = () => {
  return (
    <div>
      <div class="relative">
        <img src={bannerImage} class="w-full md:h-[100vh]" alt="Banner Image" />
        <div class="absolute top-0 left-0 w-full h-full flex  flex-col justify-center p-3 z-10">
          <h1 class=" text-xl md:text-5xl text-white font-bold mb-4">
            Where cooking meets creativity.
          </h1>
          <p className="text-2xl font-[400] text-white">
            Learn how make your favorite restaurant's dishes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
