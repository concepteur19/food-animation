import React, { useEffect, useState } from "react";
import "../src/styles/App.css";
import FoodCard from "./components/Card";
import CircleTopRigth from "./components/CircleTopRigth";
import CurrentFood from "./components/CurrentFood";
import Navbar from "./components/Navbar";
import { plats } from "./Data/foodImages";
import { colors, angles } from "./Data/foodData";
import Footer from "./components/Footer";

const App = () => {

  const [image, setImage] = useState<string>(plats[0]);
  const [rotate, setRotation] = useState<number>(0);

  const [themeColor, SetThemeColor] = useState<string>(colors[0]);

  useEffect(() => {
    console.log(themeColor, image, rotate)
  }, [image, rotate, themeColor])

  const handleIconClick = (param: string) => {
    // handleCircleFoodRotation(param);

    if (param === "iconLeft") {
      setImage((prevState) => {
        const prevStateId = plats.indexOf(prevState);
        console.log("id de l'image précédente", prevStateId);

        if (prevStateId === 0) {
          // si on est à l'image 1 et qu'on clique sur icon left la rotataion nous ramène à la dernière image
          setRotation(angles[2]);

          SetThemeColor(colors[2]);

          return plats[plats.length - 1];
        } else {
          //modifier l'angle de rotation
          setRotation(angles[prevStateId - 1]);

          SetThemeColor(colors[prevStateId - 1]);

          return plats[prevStateId - 1];
        }
      });
    } else if (param === "iconRigth") {
      setImage((prevState) => {
        const prevStateId = plats.indexOf(prevState);
        console.log("id de l'image précédente", prevStateId);

        // setRotation(angles[prevStateId]);
        if (prevStateId === plats.length - 1) {
          setRotation(angles[0]);

          SetThemeColor(colors[0]);

          return plats[0];
        } else {
          setRotation(angles[prevStateId + 1]);

          SetThemeColor(colors[prevStateId + 1]);

          return plats[prevStateId + 1];
        }
      });
    }
  };

  return (
    <div className="App px-24  text-[#333333] overflow-hidden">
      <CircleTopRigth rotation={rotate} bgColor={themeColor} />

      <div className="relative z-10">
        <Navbar />

        <div className="flex space-x-28">
          <FoodCard
            price={`$${'32'}`}
            color={themeColor}
            foodName="Green Goddess Chicken Salad"
            foodDescription="It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. "
          />

          <CurrentFood
            buttonColor={`bg-[${themeColor}]`}
            imgSource={image}
            handleClick={handleIconClick}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
