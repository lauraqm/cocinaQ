import React from "react";
import "./recipeInfo.scss";
import Blender from "./icons/blender";
import VerticalDivider from "./verticalDivider";
import Mixer from "./icons/mixer";
import Oven from "./icons/oven";
import Pan from "./icons/pan";
import PipingBag from "./icons/pipingBag";
import Pot from "./icons/pot";
import Pyrex from "./icons/pyrex";
import Servings from "./icons/servings";
import Shredder from "./icons/shredder";
import PressionPot from "./icons/pressionPot";



const RecipeInfo = (props) => {
  const { cooktime, servings, utensils } = props.metadata;
  const recipeInfo = [];
  const utensilsIcons = {
    blender: <Blender/>,
    mixer: <Mixer/>,
    oven: <Oven/>,
    pan: <Pan/>,
    pipingBag: <PipingBag/>,
    pot: <Pot/>,
    pyrex: <Pyrex/>,
    shredder: <Shredder/>,
    pressionPot: <PressionPot/>
  };

  if (cooktime) {
    const cookTimeContainer = (
      <div className="info-container">
        <div className="big-text">{cooktime}</div>
        <div>minutos</div>
      </div>
    );
    recipeInfo.push(cookTimeContainer);
  }
  if (servings) {
    const servingsContainer = (
        <div className="info-container with-divider">
          <div className="big-text">{servings} </div>
          <div>porciones</div>
        </div>
    );
    recipeInfo.push(servingsContainer);
  }
  if (utensils) {
    const utensilList = utensils.split(",");
    const utensilIcons = [];
    utensilList.forEach(element => {
      const icon = utensilsIcons[element];
      utensilIcons.push (<div className="icon">{icon}</div>) ;
    });
    
    const servingsContainer = (
      <div className="info-container with-divider">
        <div className="utensils">{utensilIcons}</div>
        <div>utensilios</div>
      </div>
  );
  recipeInfo.push(servingsContainer);
  }

  if (recipeInfo.length > 0) {
    return (
      <div className="recipe-info-bar">
        {recipeInfo}
      </div>
    );
  }
  else return null;
};



export default RecipeInfo;
