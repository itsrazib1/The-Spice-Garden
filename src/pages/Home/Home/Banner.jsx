import React from 'react';
import { FaSearchengin, FaJenkins, FaBreadSlice, FaHandPeace } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='border-2 border-black mt-5 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-3 p-5 md:p-10 justify-items-center items-center	'>
      {/* left side */}
      <div className='px-2 md:px-5 border-2 border-sky-400 p-3 rounded-2xl'>
        
        <h2 className='text-1xl md:text-3xl'>
          <span className='text-3xl md:text-5xl text-sky-800 font-bold'>Welcome to</span>
          <span className='underline decoration-base-200 text-3xl md:text-5xl pl-1 md:pl-2 font-bold'>The Spice Garden</span>
        </h2>
        <br />
        <p className=' text-slate-500'>
          This recipes and chef website is a platform dedicated to providing recipes, cooking tips, and techniques to individuals who are interested in cooking. The website can offer a wide range of recipes, from simple and easy-to-follow dishes to more complex and elaborate meals. The website may also include information on the latest cooking trends, food-related news, and interviews with renowned chefs.
          <br />
          On your website, you can showcase recipes of American cuisines and cultures, including appetizers, entrees, desserts, and more. You can also provide detailed cooking instructions, ingredient lists, and tips and tricks for preparing each dish.
        </p>
        <br />
        <div className='text-1xl text-green-600 grid grid-cols-2'>
          <span className='flex gap-2 justify-items-center items-center'>
            <FaSearchengin />
            Founding year: 2023
          </span>
          <span className='flex gap-2 justify-items-center items-center'>
            <FaJenkins />
            Chefs: 5+
          </span>
          <span className='flex gap-2 justify-items-center items-center'>
            <FaBreadSlice />
            Recipes: 17+
          </span>
          <span className='flex gap-2 justify-items-center items-center'>
            <FaHandPeace />
            Review: 1500+
          </span>
        </div>
      </div>
      {/* right side */}
      <div className='sm:order-first'>
        <div className="h-48 md:h-72 carousel carousel-vertical rounded">
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-photo/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19923.jpg?size=626&ext=jpg&ga=GA1.2.1047442247.1677490654&semt=ais" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-photo/top-view-crawfish-plate_23-2150346565.jpg?size=626&ext=jpg&ga=GA1.1.1047442247.1677490654&semt=ais" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-vector/hand-drawn-indian-cuisine-illustration_23-2149323580.jpg?size=626&ext=jpg&ga=GA1.1.1047442247.1677490654&semt=ais" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?size=626&ext=jpg&ga=GA1.1.1047442247.1677490654&semt=ais" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?size=626&ext=jpg&ga=GA1.1.1047442247.1677490654&semt=ais" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-photo/plate-food-with-different-dishes-including-chicken-rice-other-food_1340-24267.jpg?size=626&ext=jpg&ga=GA1.1.1047442247.1677490654&semt=ais" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?size=626&ext=jpg&ga=GA1.1.1047442247.1677490654&semt=ais" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://i.ibb.co/Rhv98Hm/Roast-Turkey.jpg" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?size=626&ext=jpg&ga=GA1.1.1047442247.1677490654&semt=ais" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;