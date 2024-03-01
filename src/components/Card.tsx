import React from "react";

type CardProps = {
  price: number;
  foodName: string;
  foodDescription: string;
  color: string;
  showNextText: boolean;
  icon: string;
};

const FoodCard = ({
  price,
  foodName,
  foodDescription,
  color,
  showNextText,
  icon,
}: CardProps) => {
  const textColorTab = color.split("bg-[");
  const textColor = textColorTab[1].split("]")[0];

  console.log(textColorTab[1].split("]")[0]);

  return (
    <div className="text-left mt-[212px]">
      <p
        style={{ color: textColor }}
        className={`font-semibold  text-[44px] transition-all origin-left duration-500 ease-in-out ${
          showNextText ? " opacity-0 scale-0" : " opacity-100 scale-100"
        }`}
      >
        {" "}
        ${price}{" "}
      </p>
      <p
        className={`font-medium text-[36px] w-[367px] mb-3 transition-all origin-left duration-500 ease-in-out ${
          showNextText ? " opacity-0 scale-0" : " opacity-100 scale-100"
        }`}
      >
        {" "}
        {foodName}{" "}
      </p>
      <p
        className={` text-sm w-[347px] mb-7 duration-500 transition-all origin-left ease-in-out ${
          showNextText ? " opacity-0 scale-0" : " opacity-100 scale-100"
        }`}
      >
        {" "}
        {foodDescription}{" "}
      </p>
      <button style={{transition: 'background-color 0.3 ease'}}
        className={`w-[143px] text-white font-bold text-[13px] py-[14px] rounded-[69px] ${color} shadow-[0_20px_40px_rgba(244, 226, 209, 1)] transition-all origin-left duration-500 ease-in-out ${
          showNextText ? " opacity-0 scale-0" : " opacity-100 scale-100"
        }`}
      >
        {" "}
        ORDER NOW{" "}
      </button>
    </div>
  );
};

export default FoodCard;
