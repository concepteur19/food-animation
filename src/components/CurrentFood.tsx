import React from "react";
import { foodImages } from "../Data/foodImages";

type CurrentFoodProps = {
  buttonColor: string;
  imgSource: string;
  handleClick: (param: string) => void;
  showNextText: boolean;
  icon: string;
};

const CurrentFood = ({
  imgSource,
  buttonColor,
  handleClick,
  showNextText,
  icon,
}: CurrentFoodProps) => {
  return (
    <div className=" flex items-end mt-[288px] ml-[151px]">
      <span
        onClick={() => handleClick("iconLeft")}
        className={
          buttonColor +
          " rounded-full p-[14px] cursor-pointer shadow-[0_20px_40px_rgba(244, 226, 209, 1)]"
        }
      >
        {" "}
        <img src={foodImages.chevronDown} alt="ic1" />{" "}
      </span>

      <img
        src={imgSource}
        alt="currentFood"
        className={`fadeIn fadeOut ml-[54px] mr-[72px] -mb-16 transition-all duration-500 ease-in-out ${
          showNextText
            ? ` opacity-0 scale-0 ${icon === "iconLeft"? " -rotate-45" : " rotate-45"}`
            : " opacity-100 scale-100"
        }`}
      />

      <span
        onClick={() => handleClick("iconRigth")}
        className={
          buttonColor +
          " rounded-full p-[14px] cursor-pointer shadow-[0_20px_40px_rgba(244, 226, 209, 1)]"
        }
      >
        {" "}
        <img src={foodImages.chevronDown} alt="ic2" />{" "}
      </span>
    </div>
  );
};

export default CurrentFood;
