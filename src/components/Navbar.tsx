import React from "react";
import { foodImages } from '../Data/foodImages'

const Navbar = () => {
  return (
    <div className=" flex items-start mt-12 space-x-[170px] font-medium" >
        
          <img className="-mt-1"  src={foodImages.logo} alt="logo" width="105px" height="27px"/>
        {/* <span className=" text-lg">FoodSpin</span> */}
      
      <div className=" flex space-x-[510px]">
        <ul className=" flex space-x-16 text-sm">
          <li> Breackfast</li>
          <li> Lunch</li>
          <li> Dinner</li>
        </ul>
        <img src={foodImages.sac} alt="sac" />
      </div>
    </div>
  );
};

export default Navbar;
