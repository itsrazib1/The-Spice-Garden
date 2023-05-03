import React from 'react';
import { FaSearchengin, FaJenkins, FaBreadSlice, FaHandPeace } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-5 md:p-10 justify-items-center items-center	'>
      {/* left side */}
      <div className='px-2 md:px-5'>
        <p className=''>------ <span className='text-red-500 tracking-widest'>Chefs + Recipes</span></p>
        <h2 className='text-1xl md:text-3xl'>
          <span className='text-3xl md:text-5xl text-red-800'>Welcome to</span>
          <span className='underline decoration-base-200 text-3xl md:text-5xl pl-1 md:pl-2 font-bold'>The Spice Garden</span>
        </h2>
        <br />
        <p className=' text-slate-500'>
          This recipes and chef website is a platform dedicated to providing recipes, cooking tips, and techniques to individuals who are interested in cooking. The website can offer a wide range of recipes, from simple and easy-to-follow dishes to more complex and elaborate meals. The website may also include information on the latest cooking trends, food-related news, and interviews with renowned chefs.
          <br />
          On your website, you can showcase recipes of American cuisines and cultures, including appetizers, entrees, desserts, and more. You can also provide detailed cooking instructions, ingredient lists, and tips and tricks for preparing each dish.
        </p>
        <br />
        <div className='text-1xl text-red-800 grid grid-cols-2'>
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
            <img className='max-w-full max-h-full' src="https://i.ibb.co/NTQvPGJ/New-York-Strip-Steak-with-Red-Wine-Sauce.jpg" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://i.ibb.co/BVXdvGJ/Pesto-Pasta-Salad.jpg" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://i.ibb.co/fQB39V1/Barbecue-Pork-Ribs.jpg" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://i.ibb.co/RD9GBDf/Shrimp-Scampi.jpg" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://i.ibb.co/j4d93Cf/Macaroni-and-Cheese.jpg" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://i.ibb.co/Rhv98Hm/Roast-Turkey.jpg" />
          </div>
          <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
            <img className='max-w-full max-h-full' src="https://i.ibb.co/YNNZqYF/Mac-and-Cheese.jpg" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;