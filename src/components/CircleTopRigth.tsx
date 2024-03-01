import React from "react";
import { foodImages } from "../Data/foodImages";
import "../styles/circleFood.css";

type CircleProps = {
  bgColor: string;
  rotation: string;
  showNextText: boolean
};

const CircleTopRigth = ({ bgColor, rotation, showNextText }: CircleProps) => {

  return (
    <div
      className={`fixed top-[-665px] left-[283px] w-[1177px] h-[1177px] rounded-full overflow-hidden ${bgColor} bg-opacity-[18%]`}
    >
      <img
        src={foodImages.imageCircle}
        alt=""
        className={`mt-[845px] ml-[256px] ${rotation} duration-1000 transition-all ${
          showNextText ? " opacity-95" : " opacity-100"
        }`}
      ></img>
      {/* <div className=" circle-food"></div> */}
    </div>
  );
};

export default CircleTopRigth;
