import React, { useEffect, useState } from "react";
import "../src/styles/App.css";
import FoodCard from "./components/Card";
import CircleTopRigth from "./components/CircleTopRigth";
import CurrentFood from "./components/CurrentFood";
import Navbar from "./components/Navbar";
import { plats } from "./Data/foodImages";
import { cardInfos, FoodCardProps, foodColors, foodAngles } from "./Data/foodData";
import Footer from "./components/Footer";
// import {calPoints} from './components/digit'

const App = () => {
  // const themeColors = foodColors;
  // const angles = foodAngles

  const [image, setImage] = useState<string>(plats[0]);
  const [rotate, setRotation] = useState<string>(foodAngles[0]);
  const [cardInfo, SetCardInfo] = useState<FoodCardProps>(cardInfos[0]);

  const [themeColor, SetThemeColor] = useState<string>(foodColors[0]);

  const [showNext, setShowNextText] = useState({showNextText: false, iconClicked: ""});
  // const [iconCliked, setIconClicked] = useState<string>('');

  const handleIconClick = (param: string) => {
    // handleCircleFoodRotation(param);

    setShowNextText({showNextText: true, iconClicked: param});

    // Après un certain délai, réinitialiser showNextText à false pour afficher le texte précédent
    setTimeout(() => {
      setShowNextText({showNextText: false, iconClicked: param});
    }, 300);

      if (param === "iconLeft") {

        setImage((prevState) => {
          const prevStateId = plats.indexOf(prevState);
          console.log("id de l'image précédente", prevStateId);
  
          if (prevStateId === 0) {
            // si on est à l'image 1 et qu'on clique sur icon left la rotataion nous ramène à la dernière image
           console.log(foodColors[2], 'rotation : ', foodAngles[2]);
  
            SetCardInfo(cardInfos[plats.length - 1]);
            SetThemeColor(foodColors[foodColors.length - 1]);
            setRotation(foodAngles[foodAngles.length - 1]);
  
            return plats[plats.length - 1];
          } else {
            //modifier l'angle de rotation
            
            SetCardInfo(cardInfos[prevStateId - 1]);
            setRotation(foodAngles[prevStateId - 1]);
            SetThemeColor(foodColors[prevStateId - 1]);
  
            return plats[prevStateId - 1];
          }
        });
      } else if (param === "iconRigth") {
        setImage((prevState) => {
          const prevStateId = plats.indexOf(prevState);
          console.log("id de l'image précédente", prevStateId);
  
          // setRotation(angles[prevStateId]);
          if (prevStateId === plats.length - 1) {
            
  
            SetCardInfo(cardInfos[0]);
            setRotation(foodAngles[0]);
            SetThemeColor(foodColors[0]);
  
            return plats[0];
          } else {
  
            SetCardInfo(cardInfos[prevStateId + 1]);
            setRotation(foodAngles[prevStateId + 1]);
            SetThemeColor(foodColors[prevStateId + 1]);
  
            return plats[prevStateId + 1];
          }
        });
      }
    
  };


  useEffect(() => {
    setInterval(() => {
      handleIconClick('iconLeft')
    }, 4000)
  }, [])

  return (
    <div className="App px-24  text-[#333333] overflow-hidden">
      <CircleTopRigth 
        rotation={rotate} 
        // bgColor="red"
        bgColor={themeColor} 
        showNextText={showNext.showNextText}
      />

      <div className="relative z-10">
        <Navbar />

        <div className="flex">

          <FoodCard
            price={cardInfo.price}
            foodName={cardInfo.foodName}
            foodDescription={cardInfo.foodDescription}
            color={themeColor}
            // color="red"
            showNextText={showNext.showNextText} 
            icon={showNext.iconClicked}
          />

          <CurrentFood
            buttonColor={themeColor}
            // buttonColor="red"
            imgSource={image}
            handleClick={handleIconClick}
            showNextText= {showNext.showNextText}
            icon={showNext.iconClicked}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
