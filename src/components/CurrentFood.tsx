import React from "react";
import { foodImages } from "../Data/foodImages";

type CurrentFoodProps = {
    buttonColor: string,
    imgSource: string,
    handleClick: (param: string) => void
}

const CurrentFood = ({imgSource, buttonColor, handleClick}: CurrentFoodProps) => {
  return (
    <div className=" flex items-end mt-[268px] ">
      <p onClick={() => handleClick('iconLeft')} className={buttonColor + ' rounded-full p-[14px] cursor-pointer shadow-[0_20px_40px_rgba(244, 226, 209, 1)]'}> <img src={foodImages.chevronDown} alt="ic1" /> </p>
      <div>
        <img src={imgSource} alt="currentFood" className=" mx-[4rem]  -mb-16"/>
      </div>
      <p onClick={() => handleClick('iconRigth')} className={buttonColor + ' rounded-full p-[14px] cursor-pointer shadow-[0_20px_40px_rgba(244, 226, 209, 1)]'}> <img src={foodImages.chevronDown} alt="ic2" /> </p>
    </div>
  );
};

export default CurrentFood;
