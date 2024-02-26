import React from "react";
import { foodImages } from "../Data/foodImages";
import "../styles/circleFood.css";

type CircleProps = {
  bgColor: string;
  rotation: number;
};

const CircleTopRigth = ({ bgColor, rotation }: CircleProps) => {
  return (
    <div
      className={`fixed top-[-665px] left-[283px] w-[1177px] h-[1177px] rounded-full overflow-hidden bg-[${bgColor}] bg-opacity-[18%]`}
    >
      <img
        src={foodImages.imageCircle}
        alt=""
        className={`mt-[825px] ml-[220px] rotate-[-${rotation}deg]`}
      ></img>
      {/* <div className=" circle-food"></div> */}
    </div>
  );
};

export default CircleTopRigth;
