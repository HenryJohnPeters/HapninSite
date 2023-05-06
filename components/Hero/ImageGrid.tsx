import React from "react";
import Image from "next/image";

import charity from "../../public/static/charity.jpg";
import event from "../../public/static/event.jpg";
import neighbours from "../../public/static/neighbours.jpg";
const ImageGrid = () => {
  return (
<div className="py-10">
  <h2 className="text-3xl font-bold mb-10 text-center">Get the most out of your community!</h2>
  <div className="flex flex-wrap justify-center gap-4">
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-purple-50">
      <i className="fas fa-percent text-4xl text-purple-500 mb-4 animate-bounce-on-hover"></i>
      <h3 className="text-lg font-bold text-center uppercase tracking-wider hover:text-purple-600">Exclusive Discounts & Offers</h3>
      <p className="text-base font-medium text-center mt-4 hover:text-purple-600">Save on local events and activities.</p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">
      <i className="fas fa-globe-americas text-4xl text-blue-500 mb-4 animate-bounce-on-hover"></i>
      <h3 className="text-lg font-bold text-center uppercase tracking-wider hover:text-blue-600">Connect with like-minded people</h3>
      <p className="text-base font-medium text-center mt-4 hover:text-blue-600">Find others in your local area who share your hobbies and interests.</p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-yellow-50">
      <i className="fas fa-star text-4xl text-yellow-500 mb-4 animate-bounce-on-hover"></i>
      <h3 className="text-lg font-bold text-center uppercase tracking-wider hover:text-yellow-600">Showcase your skills and talents</h3>
      <p className="text-base font-medium text-center mt-4 hover:text-yellow-600">Host your own events and show off what makes you unique.</p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-green-50">
      <i className="fas fa-map-marker-alt text-4xl text-green-500 mb-4 animate-bounce-on-hover"></i>
      <h3 className="text-lg font-bold text-center uppercase tracking-wider hover:text-green-600">Discover exciting events in Bournemouth</h3>
      <p className="text-base font-medium text-center mt-4 hover:text-green-600">Find the hottest events and activities happening near you.</p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-red-50">
      <i className="fas fa-hands-helping text-4xl text-red-500 mb-4 animate-bounce-on-hover"></i>
      <h3 className="text-lg font-bold text-center uppercase tracking-wider hover:text-red-600">Support your community</h3>
      <p className="text-base font-medium text-center mt-4 hover:text-red-600">Help make a difference in your local community through our platform.</p>
    </div>
  </div>
</div>




  
  
  );
};


export default ImageGrid;
